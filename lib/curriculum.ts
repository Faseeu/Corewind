export const curriculum = [
  {
    id: "anatomy-of-box",
    title: "Module 1: The Anatomy of a Box",
    description: "Understand basic sizing, coloring, spacing within an element, and borders.",
    lessons: [
      {
        id: "red-square",
        title: "Create a Red Square",
        description: "Let's start with the basics - creating a simple colored square.",
        instruction: "Add classes to make this element a red square that's 128px by 128px.",
        targetClasses: ["w-32", "h-32", "bg-red-500"],
        component: "div",
        hint: "Try using w-32 for width, h-32 for height, and bg-red-500 for the red background.",
      },
      {
        id: "wider-with-padding",
        title: "Make it Wider and Add Padding",
        description: "Now let's expand our square and add some internal spacing.",
        instruction: "Make the element wider (w-48) and add padding inside (p-6).",
        targetClasses: ["w-48", "h-32", "bg-red-500", "p-6"],
        component: "div",
        hint: "Use w-48 to make it wider and p-6 to add padding on all sides.",
      },
      {
        id: "rounded-with-border",
        title: "Round Corners and Add Border",
        description: "Let's make our element more polished with rounded corners and a border.",
        instruction: "Add rounded corners (rounded-lg) and a blue border (border-2 border-blue-500).",
        targetClasses: ["w-48", "h-32", "bg-red-500", "p-6", "rounded-lg", "border-2", "border-blue-500"],
        component: "div",
        hint: "Use rounded-lg for corners, border-2 for thickness, and border-blue-500 for color.",
      },
    ],
  },
  {
    id: "text-typography",
    title: "Module 2: Text and Typography",
    description: "Style text content with fonts, sizes, colors, and alignment.",
    lessons: [
      {
        id: "heading-paragraph",
        title: "Create a Heading and Paragraph",
        description: "Learn to style different text elements with appropriate sizing.",
        instruction: "Make the heading large (text-3xl) and bold (font-bold).",
        targetClasses: ["text-3xl", "font-bold"],
        component: "p", // Changed from "text"
        hint: "Use text-3xl for size and font-bold for weight.",
      },
      {
        id: "colors-and-sizes",
        title: "Change Colors and Sizes",
        description: "Experiment with different text colors and font weights.",
        instruction: "Make the heading blue (text-blue-500) and the paragraph medium weight (font-medium).",
        targetClasses: ["text-3xl", "font-bold", "text-blue-500", "font-medium"],
        component: "p", // Changed from "text"
        hint: "Add text-blue-500 for color and font-medium for the paragraph weight.",
      },
      {
        id: "center-text",
        title: "Center the Text",
        description: "Learn text alignment and line height adjustments.",
        instruction: "Center align the text (text-center) and add comfortable line height (leading-relaxed).",
        targetClasses: ["text-3xl", "font-bold", "text-blue-500", "text-center", "leading-relaxed"],
        component: "p", // Changed from "text"
        hint: "Use text-center for alignment and leading-relaxed for line height.",
      },
    ],
  },
  {
    id: "flexbox-basics",
    title: "Module 3: Arranging Elements with Flexbox",
    description: "Align multiple items along one axis using Flexbox.",
    lessons: [
      {
        id: "three-boxes",
        title: "Place Three Boxes Side-by-Side",
        description: "Create a horizontal layout using Flexbox.",
        instruction: "Use flex to arrange elements horizontally in a row.",
        targetClasses: ["flex"],
        component: "div",
        hint: "The flex class creates a horizontal flexbox container.",
      },
    ],
  },
  {
    id: "spacing-flexbox-advanced",
    title: "Module 4: Spacing Between Elements",
    description: "Control space between elements and flex item behavior.",
    lessons: [
      {
        id: "consistent-spacing",
        title: "Add Consistent Spacing",
        description: "Learn to add uniform spacing between flex items.",
        instruction: "Add consistent horizontal spacing between elements (space-x-4).",
        targetClasses: ["flex", "space-x-4"],
        component: "div",
        hint: "Use space-x-4 to add horizontal spacing between child elements.",
      },
    ],
  },
]
