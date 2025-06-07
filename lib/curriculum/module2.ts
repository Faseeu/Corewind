export const curriculumModule2 = [
  {
    id: "module-2-typography-text",
    main_title: "✍️ Typography & Text Styling",
    secondary_title: "Making Words Look Great - Font Size, Weight, Color & Alignment",
    difficulty: "Beginner", // Overall difficulty for this module
    description:
      "Text is a huge part of any website! 📄 In this module, you'll learn how to control the appearance of your text using Tailwind CSS – from changing its size and boldness to setting colors and aligning it perfectly on the page.",
    lessons: [
      {
        id: "m2-l1-font-size",
        main_title: "🅰️ Font Size",
        secondary_title: "Controlling Text Size with `text-{size}`",
        difficulty_level: "absolute_beginner",
        focus_concept: "Using `text-{size}` utilities (e.g., `text-lg`, `text-xl`, `text-2xl`) to change font size.",
        instruction:
          "This text is a bit small. Let's make it larger! Add the class `text-xl` to make it 'extra large'. (It's inside a sized, colored box for context).",
        starter_component_jsx: '<div class="w-64 p-4 bg-slate-100"><p class="">Hello Tailwind!</p></div>', // Target is the <p> tag
        target_classes_applied_to_selector: "p", // Apply to the <p> tag within the starter
        target_classes: ["text-xl"],
        explanation: {
          intro:
            "Font size determines how big or small your text appears. Tailwind gives you easy classes to control this!",
          class_details: [
            {
              className: "text-xl",
              css_equivalent:
                "font-size: 1.25rem; /* Typically 20px */ line-height: 1.75rem; /* Tailwind also sets a matching line-height */",
              description:
                "Sets the font size to 'extra large'. Tailwind has a scale from `text-xs` (extra small) up to `text-9xl` (massive!). `text-base` is the default normal size (usually 16px).",
            },
          ],
          key_takeaway:
            "`text-{sizeName}` (e.g., `text-sm`, `text-lg`, `text-4xl`) changes font size. Tailwind also thoughtfully adjusts line height for readability.",
          expert_tip:
            "Consistent font scaling is key to good UI. Pick a few sizes from Tailwind's scale and use them consistently for headings, paragraphs, etc.",
        },
        hint: "Look for a `text-` class that means 'extra large'. `xl` is a common abbreviation!",
      },
      {
        id: "m2-l2-font-weight",
        main_title: "🏋️ Font Weight (Boldness)",
        secondary_title: "Making Text Bolder with `font-{weight}`",
        difficulty_level: "absolute_beginner",
        focus_concept: "Using `font-{weight}` utilities (e.g., `font-semibold`, `font-bold`) to control text boldness.",
        instruction:
          "Our 'Hello Tailwind!' text is now `text-xl`. Let's make it stand out more by making it **bold**. Add the class `font-bold`.",
        starter_component_jsx: '<div class="w-64 p-4 bg-slate-100"><p class="text-xl">Hello Tailwind!</p></div>',
        target_classes_applied_to_selector: "p",
        target_classes: ["font-bold"],
        explanation: {
          intro:
            "Font weight controls how thick or thin the characters in your text appear. 'Bold' is a common font weight.",
          class_details: [
            {
              className: "font-bold",
              css_equivalent: "font-weight: 700;",
              description:
                "Makes the text bold (typically a weight of 700). Tailwind offers various weights like `font-thin` (100), `font-light` (300), `font-normal` (400 - default for paragraphs), `font-medium` (500), `font-semibold` (600), `font-bold` (700), `font-extrabold` (800), and `font-black` (900).",
            },
          ],
          key_takeaway: "`font-{weightName}` (e.g., `font-medium`, `font-bold`) controls the boldness of text.",
          expert_tip:
            "Use bold text sparingly for emphasis, like headings or important words. Too much bold text can be hard to read.",
        },
        hint: "The class to make text bold starts with `font-` and uses a common word for 'bold'.",
      },
      {
        id: "m2-l3-text-color",
        main_title: "🎨 Text Color",
        secondary_title: "Changing Text Color with `text-{color}-{shade}`",
        difficulty_level: "absolute_beginner",
        focus_concept: "Using `text-{color}-{shade}` utilities to change the color of text.",
        instruction:
          "Our text is `text-xl font-bold`. Now, let's change its color to a nice indigo. Add the class `text-indigo-600`.",
        starter_component_jsx:
          '<div class="w-64 p-4 bg-slate-100"><p class="text-xl font-bold">Hello Tailwind!</p></div>',
        target_classes_applied_to_selector: "p",
        target_classes: ["text-indigo-600"],
        explanation: {
          intro:
            "You can color your text just like you color backgrounds! 🌈 This uses Tailwind's same great color palette.",
          class_details: [
            {
              className: "text-indigo-600",
              css_equivalent: "color: #4f46e5; /* Approx. indigo-600 */",
              description:
                "Sets the text color to a shade of indigo. The `text-{color}-{shade}` pattern is just like `bg-{color}-{shade}` but for text. `600` is a rich, fairly dark shade.",
            },
          ],
          key_takeaway:
            "`text-{colorName}-{shadeNumber}` changes text color. Remember, lower shade numbers are lighter, higher are darker.",
          expert_tip:
            "Ensure good contrast between your text color and background color for readability. Tools can help check WCAG accessibility contrast ratios.",
        },
        hint: "For text color, the class starts with `text-`, then the color name, then a hyphen, then the shade number.",
      },
      {
        id: "m2-l4-text-alignment",
        main_title: " सेंटर Text Alignment", // Hindi for Center - just for fun, can be English
        secondary_title: "Aligning Text with `text-{alignment}`",
        difficulty_level: "easy",
        focus_concept: "Using `text-left`, `text-center`, `text-right`, `text-justify` for text alignment.",
        instruction:
          "Our text (`text-xl font-bold text-indigo-600`) is currently aligned to the left by default. Let's **center it** within its box. Add the class `text-center`.",
        starter_component_jsx:
          '<div class="w-64 p-4 bg-slate-100"><p class="text-xl font-bold text-indigo-600">Hello Tailwind!</p></div>',
        target_classes_applied_to_selector: "p",
        target_classes: ["text-center"],
        explanation: {
          intro:
            "Text alignment controls how text lines up within its container: left, center, right, or justified (like a newspaper column).",
          class_details: [
            {
              className: "text-center",
              css_equivalent: "text-align: center;",
              description: "Aligns the text to the center of its parent block-level container.",
            },
          ],
          key_takeaway:
            "`text-left` (default for LTR languages), `text-center`, `text-right`, and `text-justify` control text alignment.",
          expert_tip:
            "Centered text is good for short headings or special callouts. For longer paragraphs, `text-left` (or `text-right` for RTL languages) is usually more readable. `text-justify` can sometimes create awkward spacing between words.",
        },
        hint: "The class to center text is quite literal: `text-` followed by the word for 'center'.",
      },
      {
        id: "m2-l5-line-height",
        main_title: "↕️ Line Height (Leading)",
        secondary_title: "Controlling Space Between Lines with `leading-{name/number}`",
        difficulty_level: "easy",
        focus_concept: "Using `leading-{name/number}` utilities to adjust line height for better readability.",
        instruction:
          "We have a paragraph here. The default line height is okay, but let's make it a bit more spacious for easier reading. Add `leading-relaxed` to the paragraph.",
        starter_component_jsx:
          '<div class="w-96 p-4 bg-slate-100"><p class="text-base text-gray-700">This is a paragraph with multiple lines of text to demonstrate the effect of line height, also known as leading. Proper line height significantly improves the readability of longer text passages.</p></div>',
        target_classes_applied_to_selector: "p",
        target_classes: ["leading-relaxed"],
        explanation: {
          intro:
            "Line height (or 'leading' in typography terms) is the vertical distance between lines of text. Proper leading is crucial for readability. 📖",
          class_details: [
            {
              className: "leading-relaxed",
              css_equivalent: "line-height: 1.625;",
              description:
                "Applies a relaxed line height, which is `1.625` times the font size. Tailwind offers named leadings (`leading-tight`, `leading-snug`, `leading-normal`, `leading-relaxed`, `leading-loose`) and numbered ones (`leading-3` to `leading-10` which correspond to fixed `rem` values).",
            },
          ],
          key_takeaway:
            "`leading-{name/number}` controls the space between lines of text. Named options are often good starting points.",
          expert_tip:
            "For body text, a line height of around 1.5 to 1.7 is generally considered comfortable. Too tight or too loose can hinder readability.",
        },
        hint: "Look for a `leading-` class that suggests a comfortable, 'relaxed' spacing.",
      },
      {
        id: "m2-l6-letter-spacing",
        main_title: "↔️ Letter Spacing (Tracking)",
        secondary_title: "Adjusting Space Between Characters with `tracking-{name}`",
        difficulty_level: "easy",
        focus_concept: "Using `tracking-{name}` utilities to adjust the spacing between letters.",
        instruction:
          "This heading text could use a little more 'air' between the letters for a stylish look. Add `tracking-tight` to make the letter spacing slightly tighter. (It already has size, weight and color).",
        starter_component_jsx:
          '<div class="w-auto p-4 bg-slate-100"><h1 class="text-3xl font-bold text-purple-700">STYLISH HEADING</h1></div>',
        target_classes_applied_to_selector: "h1",
        target_classes: ["tracking-tight"],
        explanation: {
          intro:
            "Letter spacing (or 'tracking') adjusts the horizontal space between characters in a block of text. It can be used for stylistic effect or to improve readability in some cases.",
          class_details: [
            {
              className: "tracking-tight",
              css_equivalent: "letter-spacing: -0.025em;",
              description:
                "Makes the letter spacing slightly tighter than normal. Tailwind offers `tracking-tighter`, `tracking-tight`, `tracking-normal` (default), `tracking-wide`, `tracking-wider`, `tracking-widest`.",
            },
          ],
          key_takeaway: "`tracking-{name}` controls the space between letters. Use subtly for effect.",
          expert_tip:
            "Tighter tracking is often used for large display headings for a compact look. Wider tracking can sometimes improve readability of uppercase text or small text, but use with caution as too much can make words fall apart.",
        },
        hint: "To make letter spacing tighter, use a `tracking-` class with a word that means 'tight'.",
      },
      {
        id: "m2-l7-text-decoration-transform",
        main_title: "💅 Text Styles: Decoration & Transform",
        secondary_title: "Underlines, Strikethroughs, and Text Casing",
        difficulty_level: "easy",
        focus_concept: "Using `underline`, `line-through`, `uppercase`, `lowercase`, `capitalize`.",
        instruction:
          "Let's style this 'Special Offer!' text. Make it **underlined** by adding `underline` and also transform it to **ALL CAPS** by adding `uppercase`.",
        starter_component_jsx:
          '<div class="p-4 bg-slate-100"><p class="text-xl font-semibold text-red-600">Special Offer!</p></div>',
        target_classes_applied_to_selector: "p",
        target_classes: ["underline", "uppercase"],
        explanation: {
          intro: "You can add decorations like underlines or change the casing of text for emphasis or style.",
          class_details: [
            {
              className: "underline",
              css_equivalent: "text-decoration-line: underline;",
              description: "Adds an underline to the text.",
            },
            {
              className: "uppercase",
              css_equivalent: "text-transform: uppercase;",
              description: "Transforms all characters in the text to uppercase.",
            },
          ],
          key_takeaway:
            "`underline`, `line-through` (strikethrough), `no-underline` for decorations. `uppercase`, `lowercase`, `capitalize` for text casing.",
          expert_tip:
            "Overuse of `uppercase` can make text harder to read. `capitalize` is good for titles where you want each word to start with a capital letter.",
        },
        hint: "The classes are very direct: one for 'underline' and one for 'uppercase'.",
      },
      {
        id: "m2-l8-typography-recap",
        main_title: "📝 Typography Recap: Styled Link",
        secondary_title: "Combining Typographic Utilities",
        difficulty_level: "intermediate",
        focus_concept: "Applying multiple typography utilities to style a common element like a link.",
        instruction:
          "Let's style this link to make it look more appealing. Add classes to make it: `text-lg`, `font-medium`, `text-blue-600`, and `hover:underline` (so it underlines only on hover).",
        starter_component_jsx: '<div class="p-4 bg-slate-100"><a href="#" class="">Visit Our Site</a></div>',
        target_classes_applied_to_selector: "a",
        target_classes: ["text-lg", "font-medium", "text-blue-600", "hover:underline"],
        explanation: {
          intro:
            "Now let's combine several typography utilities to style a common web element: a hyperlink (<a> tag). Good link styling improves usability! 🔗",
          class_details: [
            // Individual classes already explained. Focus on combination.
            {
              className: "hover:underline",
              description:
                "This is a state variant! It applies `underline` only when the mouse pointer is hovering over the link. We'll learn more about states like `hover:` soon.",
            },
          ],
          key_takeaway:
            "Multiple typography classes are often combined to achieve the desired look for text elements. State variants like `hover:` add interactivity.",
          expert_tip:
            "For links, ensure they are visually distinct from normal text (e.g., different color and/or underline) and have a clear hover state so users know they are interactive.",
        },
        hint: "You'll need classes for size, weight, color, and the special hover underline effect.",
      },
    ],
  },
]
