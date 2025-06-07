export const curriculumModule3 = [
  {
    id: "module-3-flexbox-intro",
    main_title: "↔️ Flexbox Intro: Rows & Columns",
    secondary_title: "Arranging Items Neatly - Your First Steps with Flexbox",
    difficulty: "Beginner", // Overall difficulty for this introductory Flexbox module
    description:
      "Web pages often need items arranged side-by-side or stacked neatly. Flexbox is a powerful CSS tool for this! Ordnung In this module, you'll learn the basics of using Tailwind's Flexbox utilities to create simple row and column layouts.",
    lessons: [
      {
        id: "m3-l1-what-is-flex",
        main_title: "➡️ Display: Flex",
        secondary_title: "Turning a Container into a Flex Row",
        difficulty_level: "absolute_beginner", // Introducing a brand new layout concept
        focus_concept:
          "Understanding `display: flex` and how the `flex` utility arranges direct children in a row by default.",
        instruction:
          "Look at the three colored boxes below. They are stacked because `div` elements are 'block' by default. To arrange them **side-by-side in a row**, add the class `flex` to their **gray parent container**.",
        starter_component_jsx: `
          <div class="p-4 bg-slate-200 rounded"> {/* This is the PARENT container */}
            <div class="w-20 h-20 bg-red-400 text-white flex items-center justify-center m-1">1</div>
            <div class="w-20 h-20 bg-green-400 text-white flex items-center justify-center m-1">2</div>
            <div class="w-20 h-20 bg-blue-400 text-white flex items-center justify-center m-1">3</div>
          </div>`,
        target_classes_applied_to_selector: ".bg-slate-200", // Target the gray parent div
        target_classes: ["flex"],
        explanation: {
          intro:
            "Flexbox is a layout mode that makes it easy to arrange items within a container. Think of it like a smart way to line up your building blocks! 🧱",
          class_details: [
            {
              className: "flex",
              css_equivalent: "display: flex;",
              description:
                "This magical class transforms the gray container into a 'flex container'. By default, a flex container arranges its direct children (the colored boxes) in a single horizontal row from left to right.",
            },
          ],
          key_takeaway: "Adding `flex` to a parent element makes its direct children line up horizontally in a row.",
          expert_tip:
            "Flexbox primarily deals with layout in one dimension at a time – either as a row or as a column. For two-dimensional layouts (rows AND columns simultaneously), CSS Grid is often used (we'll cover that later!).",
        },
        hint: "The class you need is simply `flex`. Apply it to the gray div that holds the colored boxes.",
      },
      {
        id: "m3-l2-flex-direction-column",
        main_title: "⬇️ Flex Direction: Column",
        secondary_title: "Stacking Flex Items Vertically",
        difficulty_level: "easy",
        focus_concept: "Using `flex-col` to change the main axis of a flex container to vertical.",
        instruction:
          "Our three boxes are now in a row thanks to `flex` on their parent. To stack them **vertically in a column** instead, add the class `flex-col` to the gray parent container.",
        starter_component_jsx: `
          <div class="flex p-4 bg-slate-200 rounded"> {/* Parent already has flex */}
            <div class="w-20 h-20 bg-red-400 text-white flex items-center justify-center m-1">1</div>
            <div class="w-20 h-20 bg-green-400 text-white flex items-center justify-center m-1">2</div>
            <div class="w-20 h-20 bg-blue-400 text-white flex items-center justify-center m-1">3</div>
          </div>`,
        target_classes_applied_to_selector: ".bg-slate-200",
        target_classes: ["flex-col"], // User adds this, starter already has "flex"
        explanation: {
          intro:
            "While `flex` defaults to a row, you can easily change the direction! This is called changing the 'main axis'.",
          class_details: [
            {
              className: "flex-col",
              css_equivalent: "flex-direction: column;",
              description:
                "This tells the flex container to arrange its children vertically, from top to bottom. `col` is short for 'column'.",
            },
          ],
          key_takeaway:
            "`flex-col` makes flex items stack vertically. `flex-row` (which is the default if you just use `flex`) makes them go horizontally.",
          expert_tip: "You can also reverse the order with `flex-row-reverse` or `flex-col-reverse`!",
        },
        hint: "To make flex items arrange in a column, add `flex-col` to the parent that already has `flex`.",
      },
      {
        id: "m3-l3-justify-content-start-end-center",
        main_title: "↔️ Justify Content: Main Axis",
        secondary_title: "Aligning Items Along the Main Flow (Row)",
        difficulty_level: "easy",
        focus_concept:
          "Using `justify-start`, `justify-center`, `justify-end` to align items along the main axis of a flex row.",
        instruction:
          "These three boxes are in a `flex` row inside a wider gray container. By default, they start on the left (`justify-start`). Let's **center them horizontally** within the container. Add `justify-center` to the gray parent.",
        starter_component_jsx: `
          <div class="w-full flex p-4 bg-slate-200 rounded h-32"> {/* Parent is flex, full width, and has height */}
            <div class="w-20 h-20 bg-red-400 text-white flex items-center justify-center m-1">1</div>
            <div class="w-20 h-20 bg-green-400 text-white flex items-center justify-center m-1">2</div>
            <div class="w-20 h-20 bg-blue-400 text-white flex items-center justify-center m-1">3</div>
          </div>`,
        target_classes_applied_to_selector: ".bg-slate-200",
        target_classes: ["justify-center"], // User adds this
        explanation: {
          intro:
            "`justify-content` controls how items are spaced out or aligned along the **main axis** (the direction of flow – horizontal for a row, vertical for a column).",
          class_details: [
            {
              className: "justify-center",
              css_equivalent: "justify-content: center;",
              description:
                "Aligns the flex items to the center of the container along the main axis. If it's a row, they'll be centered horizontally.",
            },
          ],
          key_takeaway:
            "`justify-start` (default), `justify-center`, `justify-end` align items to the start, middle, or end of the main axis.",
          expert_tip:
            "For a `flex-col` container, `justify-center` would center items vertically! `justify-content` always follows the main axis defined by `flex-direction`.",
        },
        hint: "To center items along the main direction of a flex container, use `justify-` followed by 'center'.",
      },
      {
        id: "m3-l4-justify-content-space-between-around",
        main_title: "🌌 Justify: Spacing Items",
        secondary_title: "Distributing Space Between Flex Items",
        difficulty_level: "easy",
        focus_concept: "Using `justify-between` and `justify-around` to distribute space along the main axis.",
        instruction:
          "Our boxes are centered. Now, let's spread them out! Change `justify-center` to `justify-between` on the gray parent to push them to the edges with space in between.",
        starter_component_jsx: `
          <div class="w-full flex justify-center p-4 bg-slate-200 rounded h-32"> {/* Parent has justify-center to be replaced */}
            <div class="w-20 h-20 bg-red-400 text-white flex items-center justify-center m-1">1</div>
            <div class="w-20 h-20 bg-green-400 text-white flex items-center justify-center m-1">2</div>
            <div class="w-20 h-20 bg-blue-400 text-white flex items-center justify-center m-1">3</div>
          </div>`,
        target_classes_applied_to_selector: ".bg-slate-200",
        target_classes_to_remove: ["justify-center"],
        target_classes: ["justify-between"],
        explanation: {
          intro:
            "Besides simple alignment, `justify-content` can also distribute extra space *between* or *around* items.",
          class_details: [
            {
              className: "justify-between",
              css_equivalent: "justify-content: space-between;",
              description:
                "The first item is pushed to the start, the last item to the end, and any remaining space is evenly distributed *between* the items.",
            },
          ],
          key_takeaway:
            "`justify-between` pushes items to ends with space between. `justify-around` adds space around each item. `justify-evenly` makes all spaces equal.",
          expert_tip:
            "`justify-between` is very common for navigation bars where you want items spread across the full width.",
        },
        hint: "To put space *between* items, pushing the first and last to the edges, use `justify-between`.",
      },
      {
        id: "m3-l5-align-items-start-end-center",
        main_title: "↕️ Align Items: Cross Axis",
        secondary_title: "Aligning Items Across the Flow (Row)",
        difficulty_level: "easy",
        focus_concept:
          "Using `items-start`, `items-center`, `items-end` to align items along the cross axis of a flex row.",
        instruction:
          "These boxes are in a `flex` row inside a taller gray container (`h-48`). By default, they stretch vertically (`items-stretch`). Let's make them align to the **center vertically**. Add `items-center` to the gray parent.",
        starter_component_jsx: `
          <div class="w-full flex p-4 bg-slate-200 rounded h-48"> {/* Parent is flex, full width, and TALL */}
            <div class="w-20 h-auto bg-red-400 text-white flex items-center justify-center m-1 p-2">Box 1 (auto height)</div>
            <div class="w-20 h-20 bg-green-400 text-white flex items-center justify-center m-1">Box 2 (fixed height)</div>
            <div class="w-20 h-auto bg-blue-400 text-white flex items-center justify-center m-1 p-4">Box 3 (auto height, more padding)</div>
          </div>`,
        target_classes_applied_to_selector: ".bg-slate-200",
        target_classes: ["items-center"],
        explanation: {
          intro:
            "`align-items` controls how items are aligned along the **cross axis** (perpendicular to the main axis). If `flex-direction` is row (horizontal), the cross axis is vertical.",
          class_details: [
            {
              className: "items-center",
              css_equivalent: "align-items: center;",
              description:
                "Aligns the flex items to the center of the container along the cross axis. If it's a row, they'll be centered vertically.",
            },
          ],
          key_takeaway:
            "`items-start`, `items-center`, `items-end` align items to the start, middle, or end of the cross axis. `items-stretch` (default if items have no cross-axis size) makes them fill the container's cross-axis dimension. `items-baseline` aligns based on text baseline.",
          expert_tip: "`items-center` is incredibly useful for vertically centering content within a section or card.",
        },
        hint: "To center items along the cross direction (vertically in a row), use `items-` followed by 'center'.",
      },
      {
        id: "m3-l6-flexbox-gap",
        main_title: " Gap Between Items",
        secondary_title: "Adding Consistent Spacing with `gap-{number}`",
        difficulty_level: "easy",
        focus_concept: "Using `gap-{number}` (and `gap-x-`, `gap-y-`) for spacing between flex items.",
        instruction:
          "These boxes are in a `flex` row, centered vertically and horizontally. They are touching! Add a **16px gap** between them using `gap-4` on the gray parent container.",
        starter_component_jsx: `
          <div class="w-full flex justify-center items-center p-4 bg-slate-200 rounded h-48"> {/* Parent is flex and centered */}
            <div class="w-20 h-20 bg-red-400 text-white flex items-center justify-center">1</div>
            <div class="w-20 h-20 bg-green-400 text-white flex items-center justify-center">2</div>
            <div class="w-20 h-20 bg-blue-400 text-white flex items-center justify-center">3</div>
          </div>`,
        target_classes_applied_to_selector: ".bg-slate-200",
        target_classes: ["gap-4"], // User adds this
        explanation: {
          intro:
            "The `gap` property is a modern and convenient way to add space *only between* flex (or grid) items, without adding space at the ends of the container. 👍",
          class_details: [
            {
              className: "gap-4",
              css_equivalent: "gap: 1rem; /* 16px */",
              description:
                "Adds a `1rem` (16px) gap between each flex item, both horizontally and vertically if they were wrapping. (`4 * 4px = 16px`).",
            },
          ],
          key_takeaway:
            "`gap-{number}` adds space between items. `gap-x-{number}` for horizontal gap only, `gap-y-{number}` for vertical gap only.",
          expert_tip:
            "`gap` is often preferred over using margins on individual flex items for creating gutters because it doesn't add unwanted space at the edges of the container, simplifying layouts.",
        },
        hint: "To add a 16px gap (4 units * 4px/unit) between items, use `gap-` followed by the number of units.",
      },
      {
        id: "m3-l7-flexbox-intro-recap",
        main_title: "🧱 Recap: Simple Navbar Links",
        secondary_title: "Combining Basic Flexbox for a Common UI",
        difficulty_level: "intermediate",
        focus_concept:
          "Using `flex`, `justify-content`, `items-center`, and `gap` to build a simple horizontal navigation.",
        instruction:
          "Let's build a very simple horizontal navigation bar. Make the gray parent container `flex`, `items-center` (to vertically center the links), `justify-between` (to push 'Logo' left and links right), and add a `gap-4` for spacing between the links on the right. (The links themselves are already styled a bit).",
        starter_component_jsx: `
          <nav class="w-full p-4 bg-slate-700 text-slate-100 rounded"> {/* This is the PARENT nav container */}
            <div class="font-bold text-xl">Logo</div>
            <div class=""> {/* This div will hold the links, apply flex to its parent (nav) */}
              <a href="#" class="hover:text-sky-300">Home</a>
              <a href="#" class="hover:text-sky-300">About</a>
              <a href="#" class="hover:text-sky-300">Contact</a>
            </div>
          </nav>`,
        target_classes_applied_to_selector: "nav",
        target_classes: ["flex", "items-center", "justify-between"],
        explanation: {
          intro:
            "Time to combine! Many common UI patterns, like navigation bars, rely on these basic Flexbox utilities. 🚀",
          class_details: [
            { className: "flex", description: "Makes 'Logo' and the group of links arrange in a row." },
            {
              className: "items-center",
              description: "Vertically aligns 'Logo' and the link group in the middle of the nav bar.",
            },
            {
              className: "justify-between",
              description: "Pushes 'Logo' to the far left and the link group to the far right.",
            },
          ],
          key_takeaway:
            "Basic `flex`, `justify-content`, `items-center`, and `gap` are workhorses for creating clean, aligned layouts.",
          expert_tip:
            "For more complex navbars (e.g., with dropdowns or mobile menus), you'll combine these with other Tailwind utilities and often JavaScript. But these are the foundational layout tools!",
        },
        hint: "Apply `flex`, `items-center`, and `justify-between` to the main `nav` element.",
      },
    ],
  },
]
