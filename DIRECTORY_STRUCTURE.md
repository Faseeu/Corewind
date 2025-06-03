# Corewind Project Directory Structure

This document outlines the organized directory structure for the Corewind project, ensuring maintainability and scalability.

## Root Structure
\`\`\`
corewind/
├── app/                          # Next.js App Router pages
├── components/                   # React components organized by feature
├── lib/                         # Utility functions and configurations
├── public/                      # Static assets
├── styles/                      # Global styles and CSS
└── docs/                        # Documentation files
\`\`\`

## Detailed Component Organization

### `/components/`
\`\`\`
components/
├── ui/                          # Reusable UI components
│   ├── animated-button.tsx
│   ├── animated-card.tsx
│   ├── animated-progress.tsx
│   ├── badge.tsx
│   ├── button.tsx
│   ├── card.tsx
│   ├── enhanced-text-highlighter.tsx
│   ├── progress.tsx
│   ├── success-feedback.tsx
│   ├── text-highlighter.tsx
│   └── typewriter.tsx
├── landing/                     # Landing page specific components
│   ├── enhanced-hero-section.tsx
│   ├── enhanced-founder-story-section.tsx
│   ├── enhanced-landing-page.tsx
│   ├── features-section.tsx
│   ├── final-cta-section.tsx
│   ├── footer.tsx
│   ├── founder-story-section.tsx
│   ├── hero-section.tsx
│   ├── how-it-works-section.tsx
│   ├── interactive-live-preview.tsx
│   ├── landing-page.tsx
│   └── testimonials-section.tsx
├── learning/                    # Learning interface components
│   ├── code-input-panel.tsx
│   ├── explanation-panel.tsx
│   ├── instruction-panel.tsx
│   ├── learning-interface.tsx
│   ├── lesson-details.tsx
│   ├── live-preview.tsx
│   └── mission-status.tsx
├── instant-learning/            # Instant learning components
│   ├── class-input.tsx
│   ├── component-preview.tsx
│   ├── component-stage.tsx
│   ├── continue-button.tsx
│   ├── instant-learning.tsx
│   ├── learning-header.tsx
│   ├── lesson-content.tsx
│   ├── live-preview.tsx
│   ├── missions-card.tsx
│   ├── pill-progress.tsx
│   ├── progress-circle.tsx
│   ├── success-modal.tsx
│   └── task-header.tsx
├── dashboard/                   # Dashboard components
│   ├── continue-learning.tsx
│   ├── module-card.tsx
│   ├── modules-overview.tsx
│   ├── todays-tip.tsx
│   └── welcome-header.tsx
└── layout/                      # Layout components
    └── header.tsx
\`\`\`

### `/lib/`
\`\`\`
lib/
├── curriculum/                  # Curriculum data
│   ├── module1.ts
│   └── index.ts
├── curriculum.ts               # Main curriculum export
├── utils.ts                    # Utility functions
└── types.ts                    # TypeScript type definitions
\`\`\`

### `/app/`
\`\`\`
app/
├── dashboard/
│   └── page.tsx
├── learn/
│   └── [moduleId]/
│       └── [lessonId]/
│           └── page.tsx
├── globals.css
├── layout.tsx
└── page.tsx
\`\`\`

## Component Categories

### 1. UI Components (`/components/ui/`)
- **Purpose**: Reusable, generic UI components
- **Examples**: Buttons, Cards, Progress bars, Form elements
- **Characteristics**: 
  - No business logic
  - Highly reusable
  - Well-documented props
  - Consistent styling

### 2. Feature Components (`/components/[feature]/`)
- **Purpose**: Components specific to a particular feature or page
- **Examples**: Landing page sections, Learning interface panels
- **Characteristics**:
  - Contains business logic
  - Feature-specific styling
  - May compose multiple UI components

### 3. Layout Components (`/components/layout/`)
- **Purpose**: Components that define page structure
- **Examples**: Headers, Footers, Sidebars
- **Characteristics**:
  - Persistent across pages
  - Navigation and branding
  - Responsive design

## Naming Conventions

### Files
- Use kebab-case for file names: `enhanced-hero-section.tsx`
- Include component type in name when helpful: `animated-button.tsx`
- Use descriptive names that indicate purpose

### Components
- Use PascalCase for component names: `EnhancedHeroSection`
- Export as default when it's the main component
- Use named exports for utilities and types

### Directories
- Use kebab-case for directory names
- Group by feature/domain rather than technical type
- Keep nesting shallow (max 3 levels recommended)

## Import Patterns

### Absolute Imports
\`\`\`typescript
import { Button } from "@/components/ui/button"
import { EnhancedHeroSection } from "@/components/landing/enhanced-hero-section"
\`\`\`

### Relative Imports (within same feature)
\`\`\`typescript
import { InteractiveLivePreview } from "./interactive-live-preview"
\`\`\`

## Best Practices

1. **Single Responsibility**: Each component should have one clear purpose
2. **Composition over Inheritance**: Build complex components by composing simpler ones
3. **Consistent Interfaces**: Similar components should have similar prop patterns
4. **Documentation**: Include JSDoc comments for complex components
5. **Testing**: Co-locate test files with components when applicable

## Migration Notes

When moving components:
1. Update all import statements
2. Check for circular dependencies
3. Update any documentation references
4. Test all affected pages

This structure supports:
- Easy component discovery
- Clear separation of concerns
- Scalable organization as the project grows
- Consistent development patterns
\`\`\`

Finally, let's update the global CSS to include the new animations:
