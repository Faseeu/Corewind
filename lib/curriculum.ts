export const curriculum = [
  {
    id: "module-1-foundations", // Renamed for clarity
    title: "Module 1: Tailwind Foundations - The Box Model",
    description: "Master the essentials of sizing, background colors, padding, margin, and borders.",
    lessons: [
      {
        id: "m1-l1-fixed-size-square",
        title: "Lesson 1.1: Fixed Size & Background Color",
        description: "Let's start by creating a box with a specific size and background color.",
        instruction: "Make this element a 128px by 128px (w-32, h-32) square with a red background (bg-red-500).",
        targetClasses: ["w-32", "h-32", "bg-red-500"],
        component: "div", // This 'component' prop would define the base HTML for the exercise
        starter_html_structure: "<div></div>", // Example of how you might provide starter HTML
        hint: "Use `w-32` for width, `h-32` for height, and `bg-red-500` for the red background.",
        learnings: ["w-{size}", "h-{size}", "bg-{color}"] // What concepts are being taught
      },
      {
        id: "m1-l2-padding",
        title: "Lesson 1.2: Adding Padding",
        description: "Padding creates space *inside* an element, between its content and its border.",
        instruction: "Keep the red square (w-32, h-32, bg-red-500). Now, add padding of 24px on all sides (p-6). Notice how the overall size increases unless you use box-sizing: border-box (Tailwind does this by default!).",
        targetClasses: ["w-32", "h-32", "bg-red-500", "p-6"],
        component: "div",
        starter_html_structure: "<div class='w-32 h-32 bg-red-500'>CONTENT</div>", // Show content to make padding visible
        hint: "Add `p-6` to apply padding on all sides. Tailwind uses `rem` units, so `p-6` is 1.5rem or 24px by default.",
        learnings: ["p-{size}", "px-{size}", "py-{size}", "pt/pr/pb/pl-{size}"] // Introduce directional padding too
      },
      {
        id: "m1-l3-margin",
        title: "Lesson 1.3: Adding Margin",
        description: "Margin creates space *outside* an element, between it and other elements.",
        instruction: "Starting with a red square (w-32, h-32, bg-red-500), add a margin of 16px on all sides (m-4).",
        targetClasses: ["w-32", "h-32", "bg-red-500", "m-4"],
        component: "div",
        // For this exercise, the live preview should ideally show another static element nearby
        // so the user can visually see the margin creating space.
        starter_html_structure: "<div class='flex'><div class='mr-2 w-16 h-16 bg-gray-300'></div><div></div></div>", // Main element is the second div
        hint: "Use `m-4` to add margin on all sides. Observe the space created around the element.",
        learnings: ["m-{size}", "mx-{size}", "my-{size}", "mt/mr/mb/ml-{size}"]
      },
      {
        id: "m1-l4-borders",
        title: "Lesson 1.4: Borders - Width & Color",
        description: "Borders outline an element. Let's add a border with specific width and color.",
        instruction: "Take a red square (w-32, h-32, bg-red-500). Add a 2px solid blue border (border-2 border-blue-500).",
        targetClasses: ["w-32", "h-32", "bg-red-500", "border-2", "border-blue-500"],
        component: "div",
        starter_html_structure: "<div class='w-32 h-32 bg-red-500'></div>",
        hint: "Use `border-2` for a 2px border width and `border-blue-500` for the color.",
        learnings: ["border-{width}", "border-{color}"]
      },
      {
        id: "m1-l5-border-radius",
        title: "Lesson 1.5: Border Radius",
        description: "Border radius is used to round the corners of an element.",
        instruction: "Using our red square with a blue border (w-32, h-32, bg-red-500, border-2 border-blue-500), make its corners largely rounded (rounded-lg).",
        targetClasses: ["w-32", "h-32", "bg-red-500", "border-2", "border-blue-500", "rounded-lg"],
        component: "div",
        starter_html_structure: "<div class='w-32 h-32 bg-red-500 border-2 border-blue-500'></div>",
        hint: "Add `rounded-lg` for a large radius. You can also use `rounded`, `rounded-md`, `rounded-full`, etc.",
        learnings: ["rounded", "rounded-{size}", "rounded-{t/r/b/l/tr/tl/br/bl}-{size}"] // Introduce more specific rounding
      },
      {
        id: "m1-l6-width-variations",
        title: "Lesson 1.6: Width Variations - Percentages & Full",
        description: "Elements can have fixed widths, percentage widths, or take up full available width.",
        instruction: "Make this div take up 50% of its parent's width (w-1/2) and give it a light green background (bg-green-200) and some height (h-20).",
        targetClasses: ["w-1/2", "h-20", "bg-green-200"],
        component: "div",
        starter_html_structure: "<div class='w-full bg-gray-300 p-4'><div class='h-20'></div></div>", // Inner div is target
        hint: "Use `w-1/2` for 50% width. For full width, you'd use `w-full`.",
        learnings: ["w-{fraction}", "w-full", "w-screen", "max-w-{size}"] // Introduce max-width
      }
    ],
  },
  {
    id: "module-2-typography", // Renamed for clarity
    title: "Module 2: Styling Text with Typography",
    description: "Master text color, font size, weight, alignment, line height, and other text properties.",
    lessons: [
      {
        id: "m2-l1-font-size-weight",
        title: "Lesson 2.1: Font Size & Weight",
        description: "Control the size and boldness of your text.",
        // For typography, it's better to provide text content within the component
        instruction: "Make this text large (text-3xl) and bold (font-bold).",
        targetClasses: ["text-3xl", "font-bold"],
        component: "p",
        starter_html_structure: "<p>Tailwind Typography</p>",
        hint: "Use `text-3xl` for size and `font-bold` for weight. Explore other sizes like `text-lg`, `text-xl`.",
        learnings: ["text-{size}", "font-{weight}"]
      },
      {
        id: "m2-l2-text-color",
        title: "Lesson 2.2: Text Color",
        description: "Change the color of your text.",
        instruction: "Make this text blue (text-blue-600). It's already large and bold.",
        targetClasses: ["text-3xl", "font-bold", "text-blue-600"], // Build on previous
        component: "p",
        starter_html_structure: "<p class='text-3xl font-bold'>Colorful Text!</p>",
        hint: "Add `text-blue-600` for the color. Try `text-green-500` or `text-gray-700` too!",
        learnings: ["text-{color}"]
      },
      {
        id: "m2-l3-text-alignment",
        title: "Lesson 2.3: Text Alignment",
        description: "Align text to the left, center, or right of its container.",
        instruction: "Center align this text (text-center).",
        targetClasses: ["text-3xl", "font-bold", "text-blue-600", "text-center"],
        component: "p",
        starter_html_structure: "<div class='w-full bg-gray-100 p-4'><p class='text-3xl font-bold text-blue-600'>Align Me!</p></div>", // Ensure parent has width
        hint: "Use `text-center`. You can also use `text-left` or `text-right`.",
        learnings: ["text-left", "text-center", "text-right", "text-justify"]
      },
      {
        id: "m2-l4-line-height-tracking",
        title: "Lesson 2.4: Line Height & Letter Spacing",
        description: "Control the spacing between lines of text (leading) and between characters (tracking).",
        instruction: "For this paragraph, set a relaxed line height (leading-relaxed) and slightly wider letter spacing (tracking-wide).",
        targetClasses: ["leading-relaxed", "tracking-wide"],
        component: "p",
        starter_html_structure: "<p class='text-base text-gray-700 w-96'>Several lines of text here to demonstrate the effect of line height and letter spacing. This allows for better readability and aesthetic appeal in paragraphs.</p>",
        hint: "Use `leading-relaxed` for line height and `tracking-wide` for letter spacing.",
        learnings: ["leading-{size/name}", "tracking-{name}"]
      },
      {
        id: "m2-l5-text-decoration-transform",
        title: "Lesson 2.5: Text Decoration & Transform",
        description: "Add underlines, strikethroughs, or change text casing.",
        instruction: "Make this text underlined (underline) and uppercase (uppercase).",
        targetClasses: ["underline", "uppercase", "text-purple-600", "font-semibold"],
        component: "p",
        starter_html_structure: "<p class='text-purple-600 font-semibold'>Important Text</p>",
        hint: "Use `underline` and `uppercase`. Also explore `line-through` and `capitalize`.",
        learnings: ["underline", "overline", "line-through", "no-underline", "uppercase", "lowercase", "capitalize"]
      }
    ],
  },
  {
    id: "module-3-flexbox-basics",
    title: "Module 3: Flexbox Fundamentals - Arrangement & Alignment",
    description: "Learn to arrange and align items along a single axis using Flexbox.",
    lessons: [
      {
        id: "m3-l1-intro-to-flex",
        title: "Lesson 3.1: Introduction to Flex",
        description: "The `flex` class turns an element into a flex container, arranging its children in a row by default.",
        // For flexbox, the starter_html_structure becomes crucial.
        instruction: "Make this container a flex container to arrange its three child boxes in a row.",
        targetClasses: ["flex"],
        component: "div", // This is the parent container
        starter_html_structure: `
          <div class="bg-gray-200 p-4">
            <div class="w-16 h-16 bg-red-400">1</div>
            <div class="w-16 h-16 bg-green-400">2</div>
            <div class="w-16 h-16 bg-blue-400">3</div>
          </div>`,
        hint: "Simply add the `flex` class to the parent container (the one with `bg-gray-200`).",
        learnings: ["flex", "inline-flex"]
      },
      {
        id: "m3-l2-flex-direction",
        title: "Lesson 3.2: Flex Direction",
        description: "Control if flex items are arranged in a row or a column.",
        instruction: "The items are in a row. Change the flex direction to make them stack vertically in a column (`flex-col`).",
        targetClasses: ["flex", "flex-col"],
        component: "div",
        starter_html_structure: `
          <div class="bg-gray-200 p-4">
            <div class="w-16 h-16 bg-red-400">1</div>
            <div class="w-16 h-16 bg-green-400">2</div>
            <div class="w-16 h-16 bg-blue-400">3</div>
          </div>`,
        hint: "Add `flex-col` to the parent container. You can also use `flex-row-reverse` or `flex-col-reverse`.",
        learnings: ["flex-row", "flex-col", "flex-row-reverse", "flex-col-reverse"]
      },
      {
        id: "m3-l3-justify-content",
        title: "Lesson 3.3: Justify Content - Main Axis Alignment",
        description: "Distribute space between and around flex items along the main axis.",
        instruction: "Using a row direction (default for `flex`), justify the content to the center (`justify-center`). The parent container has `w-full`.",
        targetClasses: ["flex", "justify-center", "w-full"], // Added w-full to make justify visible
        component: "div",
        starter_html_structure: `
          <div class="w-full bg-gray-200 p-4">
            <div class="w-16 h-16 bg-red-400">1</div>
            <div class="w-16 h-16 bg-green-400">2</div>
            <div class="w-16 h-16 bg-blue-400">3</div>
          </div>`,
        hint: "Add `justify-center`. Explore `justify-start`, `justify-end`, `justify-between`, `justify-around`, `justify-evenly`.",
        learnings: ["justify-start", "justify-end", "justify-center", "justify-between", "justify-around", "justify-evenly"]
      },
      {
        id: "m3-l4-align-items",
        title: "Lesson 3.4: Align Items - Cross Axis Alignment",
        description: "Align flex items along the cross axis.",
        instruction: "The items are in a row, justified to the start. Align them to the center of the cross axis (`items-center`). The parent has a fixed height `h-48`.",
        targetClasses: ["flex", "items-center", "h-48"], // Added h-48 to make align-items visible
        component: "div",
        starter_html_structure: `
          <div class="w-full bg-gray-200 p-4 h-48">
            <div class="w-16 h-16 bg-red-400">1</div>
            <div class="w-16 h-24 bg-green-400">2</div> <!-- Different height child -->
            <div class="w-16 h-12 bg-blue-400">3</div>  <!-- Different height child -->
          </div>`,
        hint: "Add `items-center`. Explore `items-start`, `items-end`, `items-baseline`, `items-stretch` (default).",
        learnings: ["items-start", "items-end", "items-center", "items-baseline", "items-stretch"]
      }
    ],
  },
  {
    id: "module-4-flexbox-spacing-sizing", // Renamed
    title: "Module 4: Flexbox - Spacing & Sizing Control",
    description: "Master spacing between flex items and how they grow or shrink.",
    lessons: [
      {
        id: "m4-l1-gap",
        title: "Lesson 4.1: Gap Between Flex Items",
        description: "The `gap` utility provides consistent spacing between flex items.",
        instruction: "Arrange these items in a row (`flex`) and add a gap of 16px (`gap-4`) between them.",
        targetClasses: ["flex", "gap-4"],
        component: "div",
        starter_html_structure: `
          <div class="bg-gray-200 p-4">
            <div class="w-16 h-16 bg-red-400">1</div>
            <div class="w-16 h-16 bg-green-400">2</div>
            <div class="w-16 h-16 bg-blue-400">3</div>
          </div>`,
        hint: "Use `gap-4`. You can also use `gap-x-4` or `gap-y-4` for specific directions.",
        learnings: ["gap-{size}", "gap-x-{size}", "gap-y-{size}"]
      },
      {
        id: "m4-l2-flex-grow",
        title: "Lesson 4.2: Flex Grow",
        description: "`flex-grow` allows a flex item to grow and take up available space along the main axis.",
        instruction: "Make the second box (`bg-green-400`) grow to fill the remaining space. Add `flex-grow` to it.",
        targetClassesParent: ["flex", "w-full", "gap-2"], // Classes for the parent div
        targetClassesChild2: ["flex-grow"], // Classes specifically for the second child
        component: "div", // The parent is the one we add `flex` to
        // This requires ability to target specific children in the exercise validation.
        starter_html_structure: `
          <div class="w-full bg-gray-200 p-4">
            <div class="w-16 h-16 bg-red-400">1</div>
            <div class="h-16 bg-green-400 px-2">2 (I should grow)</div>
            <div class="w-16 h-16 bg-blue-400">3</div>
          </div>`,
        hint: "Add `flex-grow` to the second child div. For no growth, it's `flex-grow-0` (default).",
        learnings: ["flex-grow", "flex-grow-0"]
      },
      {
        id: "m4-l3-flex-shrink",
        title: "Lesson 4.3: Flex Shrink",
        description: "`flex-shrink` allows a flex item to shrink if there isn't enough space. By default, items shrink.",
        instruction: "Prevent the first box (`bg-red-400`) from shrinking when space is limited. Add `flex-shrink-0` to it. All boxes have `w-48`.",
        targetClassesParent: ["flex", "w-96", "gap-2"], // Parent is narrower than sum of children
        targetClassesChild1: ["flex-shrink-0"],
        component: "div",
        starter_html_structure: `
          <div class="w-96 bg-gray-200 p-4"> <!-- Parent is 384px, children sum to 576px -->
            <div class="w-48 h-16 bg-red-400">1 (Don't Shrink Me)</div>
            <div class="w-48 h-16 bg-green-400">2</div>
            <div class="w-48 h-16 bg-blue-400">3</div>
          </div>`,
        hint: "Add `flex-shrink-0` to the first child. `flex-shrink` is the default (allows shrinking).",
        learnings: ["flex-shrink", "flex-shrink-0"]
      },
      {
        id: "m4-l4-flex-basis-and-flex-1",
        title: "Lesson 4.4: Flex Basis & The \`flex-1\` Shortcut",
        description: "\`flex-basis\` defines the default size of an element before remaining space is distributed. \`flex-1\` is a shortcut for \`flex-grow: 1; flex-shrink: 1; flex-basis: 0%;\`.",
        instruction: "Make all three boxes share the available space equally. Apply \`flex-1\` to each child.",
        targetClassesParent: ["flex", "w-full", "gap-2"],
        targetClassesChildren: ["flex-1"], // A way to specify class for all direct children
        component: "div",
        starter_html_structure: `
          <div class="w-full bg-gray-200 p-4">
            <div class="h-16 bg-red-400">1</div>
            <div class="h-16 bg-green-400">2</div>
            <div class="h-16 bg-blue-400">3</div>
          </div>`,
        hint: "Add \`flex-1\` to each of the three child divs.",
        learnings: ["flex-basis-{size}", "flex-1"]
      },
      {
        id: "m4-l5-flex-wrap",
        title: "Lesson 4.5: Flex Wrap",
        description: "Control whether flex items wrap to the next line if there isn't enough space in the current line.",
        instruction: "These items are trying to fit in one row. Allow them to wrap to the next line using \`flex-wrap\`.",
        targetClasses: ["flex", "flex-wrap", "gap-2"],
        component: "div",
        starter_html_structure: `
          <div class="w-64 bg-gray-200 p-4"> <!-- Container is narrower -->
            <div class="w-32 h-16 bg-red-400">1</div>
            <div class="w-32 h-16 bg-green-400">2</div>
            <div class="w-32 h-16 bg-blue-400">3</div>
          </div>`,
        hint: "Add \`flex-wrap\` to the parent container. \`flex-nowrap\` is the default.",
        learnings: ["flex-wrap", "flex-nowrap", "flex-wrap-reverse"]
      }
    ],
  },
  // --- NEW MODULES ---
  {
    id: "module-5-responsive-design",
    title: "Module 5: Responsive Design with Breakpoints",
    description: "Adapt your layouts for different screen sizes using Tailwind's breakpoint prefixes.",
    lessons: [
      {
        id: "m5-l1-basic-responsive-width",
        title: "Lesson 5.1: Responsive Width",
        description: "Change an element's width based on screen size. Tailwind is mobile-first.",
        instruction: "Make this box take up full width (\`w-full\`) on small screens (default), but only half width (\`md:w-1/2\`) on medium screens and up.",
        targetClasses: ["w-full", "md:w-1/2", "h-32", "bg-purple-500"],
        component: "div",
        starter_html_structure: "<div class='bg-gray-100 p-4'><div class='h-32 bg-purple-500'></div></div>",
        hint: "Classes without prefixes apply to all sizes (mobile-first). Add \`md:w-1/2\` for medium screens. Try resizing your preview!",
        learnings: ["sm:", "md:", "lg:", "xl:", "2xl:", "Mobile-first concept"]
      },
      {
        id: "m5-l2-responsive-flex-direction",
        title: "Lesson 5.2: Responsive Flex Direction",
        description: "Change flex layout direction based on screen size. A common pattern!",
        instruction: "Arrange these items in a column (\`flex-col\`) on small screens, but in a row (\`lg:flex-row\`) on large screens and up. Use \`flex\` on the parent.",
        targetClassesParent: ["flex", "flex-col", "lg:flex-row", "gap-4"],
        component: "div",
        starter_html_structure: `
          <div class="bg-gray-200 p-4">
            <div class="p-4 bg-red-400">Item 1</div>
            <div class="p-4 bg-green-400">Item 2</div>
            <div class="p-4 bg-blue-400">Item 3</div>
          </div>`,
        hint: "Apply \`flex\` and \`flex-col\` for the default (mobile) and \`lg:flex-row\` for large screens.",
        learnings: ["Applying breakpoints to flex utilities"]
      },
      {
        id: "m5-l3-responsive-visibility",
        title: "Lesson 5.3: Responsive Visibility",
        description: "Show or hide elements at different screen sizes.",
        instruction: "Make this 'Mobile Only' text hidden on medium screens and up (\`md:hidden\`).",
        targetClasses: ["block", "md:hidden", "text-lg", "text-red-600"], // \`block\` to ensure it's visible
        component: "p",
        starter_html_structure: "<p class='text-lg text-red-600'>Mobile Only Text (will disappear on medium screens)</p>",
        hint: "Use \`md:hidden\`. To hide by default and show on medium, you'd use \`hidden md:block\`.",
        learnings: ["hidden", "{breakpoint}:hidden", "{breakpoint}:block"]
      }
    ]
  }
  // Module 6 & 7 are missing in the provided text, but were mentioned in the user's description.
  // Assuming they should be added if available, or this is the complete new curriculum for now.
];
