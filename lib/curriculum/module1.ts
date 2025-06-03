// lib/curriculum/module1.ts
export const curriculumModule1 = [
  {
    id: "module-1-box-basics", // Shorter main ID
    main_title: "📦 Box Basics", // Concise main title with emoji
    secondary_title: "Your First Steps in Web Styling - Understanding Space & Color", // Existing title as secondary
    difficulty: "Absolute Beginner",
    description:
      "Welcome to web styling! 🖼️ Let's learn how to give simple shapes (boxes) size, color, and spacing. Think of it like digital drawing and coloring, no experience needed!",
    lessons: [
      {
        id: "m1-l1-width", // Shorter lesson ID
        main_title: "📏 Setting Width",
        secondary_title: "Sizing Your First Box - Understanding Width",
        difficulty_level: "absolute_beginner",
        focus_concept:
          "Understanding 'width' as a dimension and how Tailwind's w-{number} controls it. Introduction to Tailwind's unit system.",
        instruction:
          "Web pages use **pixels (px)** for size. Let's make this box **128 pixels wide**. In Tailwind, add the class `w-32` to do this. (The gray background and initial height are already set up for you 👍).",
        starter_component_jsx: '<div class="h-16 bg-slate-200"></div>',
        target_classes: ["w-32"],
        explanation: {
          intro:
            "Imagine your screen is a grid of tiny lights 💡 – these are pixels! '128 pixels wide' means it spans 128 of these dots horizontally.",
          class_details: [
            {
              className: "w-32",
              css_equivalent: "width: 8rem; /* 128px */",
              description:
                "Makes the box 128px wide. Tailwind's magic rule for these numbers: **Tailwind Number * 4 = Pixels (px)**. So, `w-32` is `32 * 4px = 128px`.",
            },
          ],
          key_takeaway: "`w-{number}` controls width. Pixel width = Tailwind Number * 4.",
          expert_tip:
            "Exact pixel sizes are a start, but soon we'll explore responsive sizes that adapt to different screens! 📱💻",
        },
        hint: "To get 128 pixels wide: `128 / 4 = ?`. Use this number in your `w-` class.",
      },
      {
        id: "m1-l2-height",
        main_title: "📐 Setting Height",
        secondary_title: "Sizing Your First Box - Understanding Height",
        difficulty_level: "absolute_beginner",
        focus_concept: "Understanding 'height' and how Tailwind's h-{number} controls it.",
        instruction:
          "Our box is already 128px wide (`w-32`) and gray. Now, let's make it **128 pixels tall** by adding `h-32`.",
        starter_component_jsx: '<div class="w-32 bg-slate-200"></div>',
        target_classes: ["h-32"],
        explanation: {
          intro: "Height measures top-to-bottom, also in pixels. Let's make our box a perfect square!",
          class_details: [
            {
              className: "h-32",
              css_equivalent: "height: 8rem; /* 128px */",
              description:
                "Makes the box 128px tall. Same rule: **Tailwind Number * 4 = Pixels (px)**. So, `h-32` means `32 * 4px = 128px`.",
            },
          ],
          key_takeaway: "`h-{number}` controls height, using the same 'Multiply by 4' rule.",
          expert_tip:
            "Sometimes height is set by content (`h-auto`) or fills available space (`h-full`). More on these later!",
        },
        hint: "Same logic as width! For 128 pixels tall, what `h-` class uses the 'Multiply by 4' rule?",
      },
      {
        id: "m1-l3-background-color",
        main_title: "🎨 Background Color",
        secondary_title: "Adding Color - Backgrounds & Shades",
        difficulty_level: "absolute_beginner",
        focus_concept: "bg-{color}-{shade} and understanding color shades.",
        instruction: "Our box is now a 128px square (`w-32 h-32`). Let's give it a blue background! Add `bg-blue-500`.",
        starter_component_jsx: '<div class="w-32 h-32"></div>',
        target_classes: ["bg-blue-500"],
        explanation: {
          intro: "Color makes web pages pop! ✨ `bg-` classes change the background color.",
          class_details: [
            {
              className: "bg-blue-500",
              css_equivalent: "background-color: #3b82f6; /* Approx. */",
              description:
                "Sets a blue background. Tailwind colors have shade numbers like `100` (light) to `900` (dark). `500` is a nice, balanced mid-tone.",
            },
          ],
          key_takeaway:
            "`bg-{colorName}-{shadeNumber}` sets background color. Lower shades = lighter, higher shades = darker.",
          expert_tip: "Check Tailwind's official docs for the full, beautiful color palette! 🌈",
        },
        hint: "Class starts with `bg-`, then color name, then `-`, then shade (e.g., 500).",
      },
      {
        id: "m1-l4-padding-all",
        main_title: "🛋️ Uniform Padding",
        secondary_title: "Breathing Room Inside - All Sides",
        difficulty_level: "absolute_beginner",
        focus_concept: "Conceptual understanding of padding and p-{number} for all sides.",
        instruction:
          "Our blue box (`w-32 h-32 bg-blue-500`) has text. It's a bit cramped! **Padding** adds 'cushioning' *inside*. Add 16 pixels of padding on all sides with `p-4`.",
        starter_component_jsx:
          '<div class="w-32 h-32 bg-blue-500 text-white flex items-center justify-center text-sm font-medium">TEXT</div>',
        target_classes: ["p-4"],
        explanation: {
          intro:
            "Padding is like the empty space inside a photo frame, around the photo. 🖼️ It gives content 'breathing room'.",
          class_details: [
            {
              className: "p-4",
              css_equivalent: "padding: 1rem; /* 16px */",
              description:
                "Adds 16px padding to all four sides (top, right, bottom, left). Rule: **Tailwind Number * 4 = Pixels (px)**, so `p-4` means `4 * 4px = 16px`.",
            },
          ],
          key_takeaway: "`p-{number}` adds space *inside* an element. Pixel amount = Tailwind Number * 4.",
          expert_tip: "Good padding is key to readable text and clean design. Don't skimp on it!",
        },
        hint: "For 16px padding (all sides), what `p-` class uses the 'Multiply by 4' rule?",
      },
      {
        id: "m1-l5-padding-xy",
        main_title: "↔️↕️ Axis Padding",
        secondary_title: "Targeted Inner Space - Padding X & Y Axes",
        difficulty_level: "easy",
        focus_concept: "Applying horizontal (px-{number}) and vertical (py-{number}) padding.",
        instruction:
          "Our blue box has uniform `p-4`. Let's change it: 32px padding horizontally (add `px-8`), and 16px vertically (add `py-4`). You'll need to *remove* the old `p-4` class first!",
        starter_component_jsx:
          '<div class="w-32 h-32 bg-blue-500 text-white flex items-center justify-center text-sm font-medium p-4">TEXT</div>',
        target_classes_to_remove: ["p-4"],
        target_classes: ["px-8", "py-4"],
        explanation: {
          intro:
            "Often, you want different padding for horizontal (↔️ left/right) and vertical (↕️ top/bottom) directions.",
          class_details: [
            {
              className: "px-8",
              css_equivalent: "padding-left: 2rem; padding-right: 2rem; /* 32px each */",
              description: "Applies `32px` padding left/right. 'x' = horizontal. (`8 * 4px = 32px`).",
            },
            {
              className: "py-4",
              css_equivalent: "padding-top: 1rem; padding-bottom: 1rem; /* 16px each */",
              description: "Applies `16px` padding top/bottom. 'y' = vertical. (`4 * 4px = 16px`).",
            },
          ],
          key_takeaway: "`px-{number}` for left/right padding; `py-{number}` for top/bottom. Great for buttons!",
          expert_tip: "If you need totally different padding on all four sides, we have utilities for that too!",
        },
        hint: "Remove `p-4`. Add two new classes: `px-` for horizontal, `py-` for vertical.",
      },
      {
        id: "m1-l6-padding-sides",
        main_title: "🎯 Single-Side Padding",
        secondary_title: "Pinpoint Inner Space - Specific Sides",
        difficulty_level: "easy",
        focus_concept: "Applying padding to individual sides: pt, pr, pb, pl.",
        instruction:
          "Our blue box has `px-8 py-4`. For max control, let's set padding for each side: 8px top (`pt-2`), 16px right (`pr-4`), 24px bottom (`pb-6`), and 32px left (`pl-8`). Remove `px-8` and `py-4` first.",
        starter_component_jsx:
          '<div class="w-32 h-32 bg-blue-500 text-white flex items-center justify-center text-xs font-medium px-8 py-4">TEXT</div>',
        target_classes_to_remove: ["px-8", "py-4"],
        target_classes: ["pt-2", "pr-4", "pb-6", "pl-8"],
        explanation: {
          intro: "For ultimate control, target padding on each side: Top (t), Right (r), Bottom (b), Left (l).",
          class_details: [
            { className: "pt-2", description: "Padding Top: `2*4px=8px`." },
            { className: "pr-4", description: "Padding Right: `4*4px=16px`." },
            { className: "pb-6", description: "Padding Bottom: `6*4px=24px`." },
            { className: "pl-8", description: "Padding Left: `8*4px=32px`." },
          ],
          key_takeaway: "Use `pt-`, `pr-`, `pb-`, `pl-` for specific side padding.",
          expert_tip:
            "While powerful, use symmetrical padding (`p-`, `px-`, `py-`) when possible for consistency. These are for unique cases.",
        },
        hint: "Remove `px-` & `py-`. Add four new classes: `pt-`, `pr-`, `pb-`, `pl-`.",
      },
      {
        id: "m1-l7-margin-all",
        main_title: "🌌 Uniform Margin",
        secondary_title: "Creating Outer Space - All Sides",
        difficulty_level: "easy",
        focus_concept: "Adding margin on all sides using m-{number} for space around an element.",
        instruction:
          "See the blue box and the gray box? They're touching! **Margin** is space *outside* a box. On the blue box (`w-24 h-24 bg-blue-500`), add a 16px margin on all sides with `m-4`. This will push it away.",
        starter_component_jsx:
          '<div class="flex items-center p-1 bg-slate-100"><div class="w-24 h-24 bg-slate-300"></div><div class="w-24 h-24 bg-blue-500"></div></div>',
        target_classes_applied_to_selector: ".bg-blue-500", // Target the blue box
        target_classes: ["m-4"], // Add m-4 to the blue box (its existing classes are fine)
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
        hint: "`m-` for margin (outer space). `m-4` on the blue box will create space.",
      },
      {
        id: "m1-l8-margin-xy",
        main_title: "↔️↕️ Axis Margin",
        secondary_title: "Targeted Outer Space - Margin X & Y Axes",
        difficulty_level: "easy",
        focus_concept: "Applying horizontal (mx-{number}) and vertical (my-{number}) margin.",
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
        id: "m1-l9-borders",
        main_title: "🖼️ Adding Borders",
        secondary_title: "Defining the Edge - Border Width & Color",
        difficulty_level: "easy",
        focus_concept: "Applying borders using border-{width} and border-{color}-{shade}.",
        instruction:
          "Take a box (`w-32 h-32 bg-slate-100`). Give it a 2px wide solid red border. Add `border-2` for width and `border-red-500` for color.",
        starter_component_jsx: '<div class="w-32 h-32 bg-slate-100"></div>',
        target_classes: ["border-2", "border-red-500"], // Existing classes on starter are fine
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
        hint: "Combine a border width (like `border-2`) and a border color (like `border-red-500`).",
      },
      {
        id: "m1-l10-border-radius",
        main_title: "✨ Rounded Corners",
        secondary_title: "Softening Edges - Border Radius",
        difficulty_level: "easy",
        focus_concept: "Rounding corners with rounded-{size/name}.",
        instruction:
          "Our box now has a red border (`w-32 h-32 bg-slate-100 border-2 border-red-500`). Let's make its corners nicely rounded. Add `rounded-lg`.",
        starter_component_jsx: '<div class="w-32 h-32 bg-slate-100 border-2 border-red-500"></div>',
        target_classes: ["rounded-lg"], // Add to existing classes
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
          expert_tip: "Round individual corners like `rounded-tl-xl` (top-left extra large) for unique shapes.",
        },
        hint: "`rounded-lg` gives a nice, noticeable rounding. Try `rounded-full` to see an extreme!",
      },
      {
        id: "m1-l11-card-shell-recap",
        main_title: "🧱 Building a Card Shell",
        secondary_title: "Recap - Combining Box Model Properties",
        difficulty_level: "intermediate",
        focus_concept: "Combining multiple box model properties to create a common UI element shell.",
        instruction:
          "Let's build a basic 'card' shell by combining what we've learned! Add classes to make it: 256px wide (`w-64`), white background (`bg-white`), 16px all-sides padding (`p-4`), a light gray 1px border (`border border-slate-200`), medium rounded corners (`rounded-md`), and a subtle shadow (`shadow-md` - bonus!).",
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
        hint: "Apply classes for: width, background, padding, border (both width & color!), rounding, and the shadow.",
      },
    ],
  },
]
