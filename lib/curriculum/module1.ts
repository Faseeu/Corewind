export const curriculumModule1 = [
  {
    id: "module-1-box-mastery", // More encompassing ID
    main_title: "📦 Box Mastery",
    secondary_title: "Fundamentals of Web Element Styling - Size, Space, Color & Borders",
    difficulty: "Beginner to Easy", // Reflects the range within the module
    description:
      "Welcome to Tailwind! Master the art of styling 'boxes' 🖼️ – the building blocks of all web pages. We'll cover everything from basic sizing and coloring to the nuances of spacing (padding & margin) and borders, all from scratch!",
    lessons: [
      // --- SIZING ---
      {
        id: "m1-l1-width-fixed",
        main_title: "📏 Setting Fixed Width",
        secondary_title: "Understanding Pixels and Tailwind's Width Units",
        difficulty_level: "absolute_beginner",
        focus_concept: "Controlling element width with `w-{number}` and understanding Tailwind's 'times 4' pixel rule.",
        instruction:
          "Web pages use **pixels (px)** for size. Let's make this box **128 pixels wide**. In Tailwind, add the class `w-32`. (A gray background and temporary height are set for visibility 👍).",
        starter_component_jsx: '<div class="h-16 bg-slate-200"></div>',
        target_classes: ["w-32"],
        explanation: {
          intro:
            "Elements on a webpage are like boxes. 'Width' is how wide a box is, side-to-side, measured in pixels (tiny screen dots).",
          class_details: [
            {
              className: "w-32",
              css_equivalent: "width: 8rem; /* 128px */",
              description:
                "Makes the box 128px wide. Tailwind's sizing rule: **Tailwind Number * 4 = Pixels (px)**. So, `w-32` is `32 * 4px = 128px`.",
            },
          ],
          key_takeaway: "`w-{number}` controls width. Pixel width = Tailwind Number * 4.",
          expert_tip:
            "Fixed widths are good for elements you want to be a specific size, regardless of content or screen.",
        },
        hint: "For 128px wide: `128 / 4 = ?`. Use this in your `w-` class.",
      },
      {
        id: "m1-l2-height-fixed",
        main_title: "📐 Setting Fixed Height",
        secondary_title: "Understanding Tailwind's Height Units",
        difficulty_level: "absolute_beginner",
        focus_concept: "Controlling element height with `h-{number}`.",
        instruction: "Our box is 128px wide (`w-32`). Now, make it **128 pixels tall** by adding `h-32`.",
        starter_component_jsx: '<div class="w-32 bg-slate-200"></div>',
        target_classes: ["h-32"],
        explanation: {
          intro: "'Height' is how tall a box is, top-to-bottom, also in pixels.",
          class_details: [
            {
              className: "h-32",
              css_equivalent: "height: 8rem; /* 128px */",
              description:
                "Makes the box 128px tall. Same rule: **Tailwind Number * 4 = Pixels (px)**. So, `h-32` is `32 * 4px = 128px`.",
            },
          ],
          key_takeaway: "`h-{number}` controls height, using the same 'Multiply by 4' rule.",
          expert_tip: "Sometimes height is set by content (`h-auto`, `h-full`, `min-h-screen`). More on these later!",
        },
        hint: "Same logic as width! For 128px tall, what `h-` class?",
      },
      {
        id: "m1-l3-width-percentage",
        main_title: "📊 Percentage Widths",
        secondary_title: "Making Widths Relative with Fractions",
        difficulty_level: "easy",
        focus_concept: "Using fractional widths like `w-1/2` for responsive layouts.",
        instruction:
          "This box is inside a gray container. Make the inner box take up **half (50%) of the container's width**. Add the class `w-1/2`. (It already has height and a color).",
        starter_component_jsx: '<div class="w-full bg-slate-200 p-2"><div class="h-24 bg-sky-500"></div></div>', // Inner div is target
        target_classes_applied_to_selector: ".bg-sky-500",
        target_classes: ["w-1/2"],
        explanation: {
          intro:
            "Sometimes you want a box's width to be a fraction of its parent container, not a fixed pixel size. This is key for responsiveness!",
          class_details: [
            {
              className: "w-1/2",
              css_equivalent: "width: 50%;",
              description:
                "Sets the width to 50% of the parent element's width. Tailwind offers fractions like `w-1/3`, `w-2/3`, `w-1/4`, `w-3/4`, `w-full` (100%), etc.",
            },
          ],
          key_takeaway: "`w-{fraction}` (e.g., `w-1/2`, `w-3/4`) sets width as a percentage of the parent.",
          expert_tip: "Percentage widths are fundamental for fluid layouts that adapt to different screen sizes.",
        },
        hint: "Tailwind uses fractions like `1/2`, `1/3`, `2/5` for percentage widths. Which one means half?",
      },
      {
        id: "m1-l4-width-full-screen",
        main_title: "↔️ Full & Screen Widths",
        secondary_title: "Spanning Available Space with `w-full` and `w-screen`",
        difficulty_level: "easy",
        focus_concept: "Understanding `w-full` (100% of parent) and `w-screen` (100% of viewport).",
        instruction:
          "1. Make the **first blue box** take up the **full width of its gray parent** using `w-full`. \n2. Make the **second green box** try to take up the **full width of the entire screen** using `w-screen` (it might cause scrolling if the parent has padding!).",
        starter_component_jsx:
          '<div class="bg-slate-100 p-4 space-y-4"><div class="bg-slate-300 p-2"><div class="h-16 bg-blue-500"></div></div><div class="bg-slate-300 p-2"><div class="h-16 bg-green-500"></div></div></div>',
        target_classes_map: [
          // New: for multiple targets in one lesson
          { selector: ".bg-blue-500", classes_to_add: ["w-full"] },
          { selector: ".bg-green-500", classes_to_add: ["w-screen"] },
        ],
        explanation: {
          intro:
            "Two common ways to make elements wide: `w-full` fills its direct parent, `w-screen` tries to fill the whole browser window.",
          class_details: [
            {
              className: "w-full",
              css_equivalent: "width: 100%;",
              description: "Makes an element 100% as wide as its immediate parent container.",
            },
            {
              className: "w-screen",
              css_equivalent: "width: 100vw; /* viewport width */",
              description: "Makes an element 100% as wide as the browser's viewport (the visible screen area).",
            },
          ],
          key_takeaway: "`w-full` is for filling a parent. `w-screen` is for filling the browser window width.",
          expert_tip:
            "`w-screen` can sometimes lead to horizontal scrollbars if other elements (like `body` or a wrapper `div`) have padding or margins. Use with care!",
        },
        hint: "Use `w-full` for the blue box, `w-screen` for the green box.",
      },
      // --- BACKGROUND COLOR (already well covered, simplified here) ---
      {
        id: "m1-l5-background-color-shades",
        main_title: "🎨 Background & Shades",
        secondary_title: "Understanding Tailwind's Color Palette",
        difficulty_level: "absolute_beginner",
        focus_concept: "`bg-{color}-{shade}` and how shade numbers work.",
        instruction: "Our box is `w-32 h-32`. Let's give it a vibrant purple background. Add `bg-purple-600`.",
        starter_component_jsx: '<div class="w-32 h-32"></div>',
        target_classes: ["bg-purple-600"],
        explanation: {
          intro: "Color makes things pop! ✨ `bg-` classes change background color.",
          class_details: [
            {
              className: "bg-purple-600",
              description:
                "Sets a purple background. Shade numbers (`50` to `900`) control lightness/darkness. `100` is light, `500` is mid, `900` is dark. `600` is a rich mid-dark.",
            },
          ],
          key_takeaway: "`bg-{color}-{shade}`. Lower shades = lighter, higher = darker.",
          expert_tip:
            "Consistent use of a few key colors and their shades from Tailwind's palette creates harmonious designs.",
        },
        hint: "`bg-` then color name, then `-`, then shade (e.g., 600).",
      },
      // --- PADDING (reintegrating all padding lessons) ---
      {
        id: "m1-l6-padding-all-sides",
        main_title: "🛋️ Uniform Padding (All Sides)",
        secondary_title: "Adding Inner Space with `p-{number}`",
        difficulty_level: "absolute_beginner",
        focus_concept: "Adding padding on all sides using `p-{number}`.",
        instruction:
          "This purple box (`w-32 h-32 bg-purple-600`) has text. Let's add **16 pixels of padding** *inside* on all sides with `p-4`.",
        starter_component_jsx:
          '<div class="w-32 h-32 bg-purple-600 text-white flex items-center justify-center text-sm font-medium">TEXT</div>',
        target_classes: ["p-4"],
        explanation: {
          intro: "Padding is 'cushioning' 🧸 inside a box, between its edges and content.",
          class_details: [
            {
              className: "p-4",
              description:
                "Adds 16px padding on all four sides. Rule: **Tailwind Number * 4 = Pixels**. `p-4` -> `4 * 4px = 16px`.",
            },
          ],
          key_takeaway: "`p-{number}` adds space *inside*. Pixel amount = Tailwind Number * 4.",
          expert_tip: "Generous padding often improves readability and gives a design a more 'premium' feel.",
        },
        hint: "For 16px padding (all sides), what `p-` class?",
      },
      {
        id: "m1-l7-padding-xy-axes",
        main_title: "↔️↕️ Axis Padding (X & Y)",
        secondary_title: "Targeted Inner Space for Horizontal and Vertical",
        difficulty_level: "easy",
        focus_concept: "Applying horizontal (`px-{number}`) and vertical (`py-{number}`) padding.",
        instruction:
          "Our box has uniform `p-4`. Let's change it: **32px padding horizontally** (add `px-8`), and **12px vertically** (add `py-3`). Remove `p-4` first!",
        starter_component_jsx:
          '<div class="w-32 h-32 bg-purple-600 text-white flex items-center justify-center text-sm font-medium p-4">TEXT</div>',
        target_classes_to_remove: ["p-4"],
        target_classes: ["px-8", "py-3"],
        explanation: {
          intro: "Often, you want different padding for horizontal (↔️) and vertical (↕️) directions.",
          class_details: [
            { className: "px-8", description: "`32px` padding left/right. (`8 * 4px = 32px`)." },
            { className: "py-3", description: "`12px` padding top/bottom. (`3 * 4px = 12px`)." },
          ],
          key_takeaway: "`px-{number}` for left/right padding; `py-{number}` for top/bottom. Great for buttons!",
          expert_tip: "Buttons often use more `px` than `py` to appear wider.",
        },
        hint: "Remove `p-4`. Add `px-` for horizontal, `py-` for vertical.",
      },
      {
        id: "m1-l8-padding-single-side",
        main_title: "🎯 Single-Side Padding",
        secondary_title: "Pinpoint Control: Top, Right, Bottom, Left",
        difficulty_level: "easy",
        focus_concept: "Applying padding to individual sides: `pt-`, `pr-`, `pb-`, `pl-`.",
        instruction:
          "For max control, set padding for each side: **8px top** (`pt-2`), **16px right** (`pr-4`), **24px bottom** (`pb-6`), and **4px left** (`pl-1`). Remove `px-8` and `py-3`.",
        starter_component_jsx:
          '<div class="w-32 h-32 bg-purple-600 text-white flex items-center justify-center text-xs font-medium px-8 py-3">TEXT</div>',
        target_classes_to_remove: ["px-8", "py-3"],
        target_classes: ["pt-2", "pr-4", "pb-6", "pl-1"],
        explanation: {
          intro: "For ultimate control, target padding on each side: Top (t), Right (r), Bottom (b), Left (l).",
          class_details: [
            { className: "pt-2", description: "Padding Top: `2*4px=8px`." },
            { className: "pr-4", description: "Padding Right: `4*4px=16px`." },
            { className: "pb-6", description: "Padding Bottom: `6*4px=24px`." },
            { className: "pl-1", description: "Padding Left: `1*4px=4px`." },
          ],
          key_takeaway: "`pt-`, `pr-`, `pb-`, `pl-` for specific side padding.",
          expert_tip:
            "While powerful, use symmetrical padding (`p-`, `px-`, `py-`) when possible for consistency. These are for unique cases.",
        },
        hint: "Remove `px-` & `py-`. Add four new classes: `pt-`, `pr-`, `pb-`, `pl-`.",
      },
      // --- MARGIN (reintegrating all margin lessons) ---
      {
        id: "m1-l9-margin-all-sides",
        main_title: "🌌 Uniform Margin (All Sides)",
        secondary_title: "Creating Outer Space with `m-{number}`",
        difficulty_level: "easy",
        focus_concept: "Adding margin on all sides using `m-{number}`.",
        instruction:
          "See the blue box and the gray box? They're touching! **Margin** is space *outside* a box. On the blue box (`w-24 h-24 bg-blue-500`), add a 16px margin on all sides with `m-4`.",
        starter_component_jsx:
          '<div class="flex items-center p-1 bg-slate-100"><div class="w-24 h-24 bg-slate-300"></div><div class="w-24 h-24 bg-blue-500"></div></div>',
        target_classes_applied_to_selector: ".bg-blue-500",
        target_classes: ["m-4"],
        explanation: {
          intro:
            "Margin is like an invisible force field 🛡️ around an element, pushing other elements away. It's space *outside* its border.",
          class_details: [
            {
              className: "m-4",
              css_equivalent: "margin: 1rem; /* 16px */",
              description: "Adds `16px` margin to all four sides of the blue box. (`4 * 4px = 16px`).",
            },
          ],
          key_takeaway: "`m-{number}` creates uniform external spacing. Margin is outside, padding is inside!",
          expert_tip:
            "CSS has 'margin collapsing' for vertical margins, which can be tricky. Flexbox/Grid `gap` utilities often give more predictable spacing between items.",
        },
        hint: "`m-` for margin. `m-4` on blue box will create space.",
      },
      {
        id: "m1-l10-margin-xy-axes",
        main_title: "↔️↕️ Axis Margin (X & Y)",
        secondary_title: "Targeted Outer Space for Horizontal and Vertical",
        difficulty_level: "easy",
        focus_concept: "Applying horizontal (`mx-{number}`) and vertical (`my-{number}`) margin.",
        instruction:
          "On the blue box (`w-24 h-24 bg-blue-500`), let's set axis margins: 32px horizontally (add `mx-8`), and 8px vertically (add `my-2`).",
        starter_component_jsx:
          '<div class="flex flex-col items-center p-1 bg-slate-100"><div class="w-full h-4 bg-slate-300"></div><div class="flex items-center"><div class="w-4 h-24 bg-slate-300"></div><div class="w-24 h-24 bg-blue-500"></div><div class="w-4 h-24 bg-slate-300"></div></div><div class="w-full h-4 bg-slate-300"></div></div>',
        target_classes_applied_to_selector: ".bg-blue-500",
        target_classes: ["mx-8", "my-2"],
        explanation: {
          intro: "Just like padding, `mx-*` (horizontal ↔️) and `my-*` (vertical ↕️) apply margins along axes.",
          class_details: [
            { className: "mx-8", description: "`32px` margin left/right. (`8*4px=32px`)." },
            { className: "my-2", description: "`8px` margin top/bottom. (`2*4px=8px`)." },
          ],
          key_takeaway:
            "`mx-{number}` for horizontal, `my-{number}` for vertical margins. `mx-auto` is special for centering block items horizontally!",
          expert_tip:
            "`mx-auto` on a block element with a defined width will center it horizontally within its parent.",
        },
        hint: "Use `mx-` for left/right and `my-` for top/bottom margin on the blue box.",
      },
      {
        id: "m1-l11-margin-single-side", // NEW: Added single-side margin for completeness
        main_title: "🎯 Single-Side Margin",
        secondary_title: "Pinpoint Control: Margin Top, Right, Bottom, Left",
        difficulty_level: "easy",
        focus_concept: "Applying margin to individual sides: `mt-`, `mr-`, `mb-`, `ml-`.",
        instruction:
          "On the blue box, set specific margins: **no top margin** (`mt-0`), **32px right margin** (`mr-8`), **16px bottom margin** (`mb-4`), and **8px left margin** (`ml-2`).",
        starter_component_jsx:
          '<div class="flex items-start p-1 bg-slate-100"><div class="w-24 h-24 bg-slate-300"></div><div class="w-24 h-24 bg-blue-500"></div></div>',
        target_classes_applied_to_selector: ".bg-blue-500",
        target_classes: ["mt-0", "mr-8", "mb-4", "ml-2"],
        explanation: {
          intro:
            "For precise external spacing, target margin on each side: Top (mt), Right (mr), Bottom (mb), Left (ml).",
          class_details: [
            { className: "mt-0", description: "Margin Top: `0px`." },
            { className: "mr-8", description: "Margin Right: `8*4px=32px`." },
            { className: "mb-4", description: "Margin Bottom: `4*4px=16px`." },
            { className: "ml-2", description: "Margin Left: `2*4px=8px`." },
          ],
          key_takeaway: "`mt-`, `mr-`, `mb-`, `ml-` for specific side margins.",
          expert_tip:
            "Negative margins (e.g., `-mt-4`) can be used to pull elements over each other, but use them sparingly as they can make layouts harder to reason about.",
        },
        hint: "Four classes needed: `mt-`, `mr-`, `mb-`, `ml-`.",
      },
      // --- BORDERS & RADIUS ---
      {
        id: "m1-l12-borders-width-color",
        main_title: "🖼️ Adding Borders",
        secondary_title: "Defining the Edge - Border Width & Color",
        difficulty_level: "easy",
        focus_concept: "`border-{width}` and `border-{color}-{shade}`.",
        instruction:
          "Take a box (`w-32 h-32 bg-slate-100`). Give it a **2px wide solid red border**. Add `border-2` and `border-red-500`.",
        starter_component_jsx: '<div class="w-32 h-32 bg-slate-100"></div>',
        target_classes: ["border-2", "border-red-500"],
        explanation: {
          intro: "Borders visually outline an element, sitting between its padding and margin. 📏",
          class_details: [
            {
              className: "border-2",
              css_equivalent: "border-width: 2px;",
              description: "Sets border width to 2px on all sides. Tailwind assumes `border-style: solid;`.",
            },
            {
              className: "border-red-500",
              css_equivalent: "border-color: #ef4444; /* Approx. */",
              description: "Sets border color using the same color/shade system as backgrounds.",
            },
          ],
          key_takeaway:
            "For a visible border, you need width (e.g., `border`, `border-2`) AND color (e.g., `border-slate-500`).",
          expert_tip:
            "You can add borders to individual sides: `border-t-2` (top), `border-b-4` (bottom), etc. Great for separators!",
        },
        hint: "Combine a border width (`border-2`) and a border color (`border-red-500`).",
      },
      {
        id: "m1-l13-border-radius-uniform",
        main_title: "✨ Uniform Rounded Corners",
        secondary_title: "Softening All Edges with `rounded-{size}`",
        difficulty_level: "easy",
        focus_concept: "Rounding corners with `rounded-{size/name}`.",
        instruction: "Our box has a red border. Let's make its corners **nicely rounded**. Add `rounded-lg`.",
        starter_component_jsx: '<div class="w-32 h-32 bg-slate-100 border-2 border-red-500"></div>',
        target_classes: ["rounded-lg"],
        explanation: {
          intro: "`border-radius` controls how 'round' an element's corners are, giving a softer look. 😊",
          class_details: [
            {
              className: "rounded-lg",
              css_equivalent: "border-radius: 0.5rem;",
              description:
                "Applies a 'large' border radius. Sizes: `rounded-sm` (small), `rounded` (default), `rounded-md` (medium), `rounded-lg` (large), up to `rounded-3xl`, and `rounded-full` (circle/oval).",
            },
          ],
          key_takeaway: "`rounded-{size}` applies border radius. `rounded-full` is fun for avatars! 👨‍💻",
          expert_tip: "Overly rounded corners can sometimes look dated. Subtle rounding is often more modern.",
        },
        hint: "`rounded-lg` gives a nice, noticeable rounding. Try `rounded-full` to see an extreme!",
      },
      {
        id: "m1-l14-border-radius-sides-corners", // NEW: Added specific corner/side rounding
        main_title: "🎯 Specific Rounded Corners/Sides",
        secondary_title: "Advanced Control over Border Radius",
        difficulty_level: "intermediate",
        focus_concept: "Rounding specific corners (`rounded-tl-{size}`) or sides (`rounded-t-{size}`).",
        instruction:
          "On our box with a border, let's get creative! Make **only the top two corners largely rounded** using `rounded-t-xl`. (Remove `rounded-lg` if it was there).",
        starter_component_jsx: '<div class="w-32 h-32 bg-slate-100 border-2 border-red-500 rounded-lg"></div>',
        target_classes_to_remove: ["rounded-lg"],
        target_classes: ["rounded-t-xl"],
        explanation: {
          intro: "You can round specific corners or sides for unique shapes! 🤩",
          class_details: [
            {
              className: "rounded-t-xl",
              description: "Rounds Top-Left and Top-Right corners with an 'extra large' radius.",
            },
            {
              description:
                "Others: `rounded-b-{size}` (bottom), `rounded-l-{size}` (left), `rounded-r-{size}` (right).",
            },
            {
              description:
                "Specific corners: `rounded-tl-{size}` (top-left), `rounded-tr-{size}` (top-right), `rounded-bl-{size}` (bottom-left), `rounded-br-{size}` (bottom-right).",
            },
          ],
          key_takeaway: "Granular control with `rounded-{side/corner}-{size}`.",
          expert_tip: "Combining these can create interesting pill shapes or tab-like appearances.",
        },
        hint: "`rounded-t-xl` will round both top corners. `tl`, `tr`, `bl`, `br` for individual corners.",
      },
      // --- RECAP ---
      {
        id: "m1-l15-card-shell-recap",
        main_title: "🧱 Building a Card Shell",
        secondary_title: "Recap - Combining Box Model Properties",
        difficulty_level: "intermediate",
        focus_concept: "Combining width, background, padding, border, and radius.",
        instruction:
          "Let's build a basic 'card' shell! Add classes for: **256px width** (`w-64`), **white background** (`bg-white`), **16px all-sides padding** (`p-4`), a **light gray 1px border** (`border border-slate-200`), **medium rounded corners** (`rounded-md`), and a **subtle shadow** (`shadow-md` - bonus!).",
        starter_component_jsx: '<div class=""></div>',
        target_classes: ["w-64", "bg-white", "p-4", "border", "border-slate-200", "rounded-md", "shadow-md"],
        explanation: {
          intro: "This lesson combines width, background, padding, border, and rounding to make a simple card. 🃏",
          class_details: [
            {
              className: "shadow-md",
              description: "(Bonus! 🎉) Adds a subtle `box-shadow` for a 'lifted' look. Shadows add depth!",
            },
          ],
          key_takeaway:
            "Real UIs are built by combining these fundamental properties. This card shell is a common pattern.",
          expert_tip:
            "Think in layers: base (size/bg), inner space (padding), edge (border/radius), effects (shadows). Consistency is key! 🔑",
        },
        hint: "Apply classes for: width, bg, padding, border (both width & color!), rounding, shadow.",
      },
    ],
  },
]
