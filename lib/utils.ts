import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Safely sanitizes HTML to prevent XSS attacks
 * - Removes script and event handler attributes
 * - Escapes HTML entities
 * - Basic protection against common XSS patterns
 */
export function sanitizeHtml(html: string): string {
  if (!html) return ""
  
  // Strip out script tags and their content
  html = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");
  
  // Remove potential event handlers
  html = html.replace(/on\w+\s*=\s*["'].*?["']/gi, "");
  
  // Remove javascript: URLs
  html = html.replace(/javascript:\s*.*?(["'\s])/gi, "invalid: $1");
  
  // Escape HTML entities to prevent attribute-based attacks
  html = html
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
  
  // Special handling for our markdown-style bold text (**text**)
  // We need to do this after escaping HTML entities
  html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  
  return html;
}
