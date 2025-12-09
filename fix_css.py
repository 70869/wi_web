import os

file_path = r'd:\important\[1] Etebong\Project Files\Code\wi_web\src\app\globals.css'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Construct target string with explicit newlines to match file content
target = ".focus-ring:focus {\n  outline: none;\n  ring: 2px;\n  ring-color: var(--brand-primary);\n  ring-offset: 2px;\n}\n\n/* Enhanced focus states for mobile */\n@media (max-width: 640px) {\n  .focus-ring:focus {\n    ring: 3px;\n    ring-offset: 1px;\n  }\n}"

replacement = ".focus-ring:focus {\n  outline: none;\n  @apply ring-2 ring-offset-2 ring-brand-primary;\n}\n\n/* Enhanced focus states for mobile */\n@media (max-width: 640px) {\n  .focus-ring:focus {\n    @apply ring-[3px] ring-offset-[1px];\n  }\n}"

if target in content:
    new_content = content.replace(target, replacement)
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Successfully replaced content.")
else:
    print("Target not found.")
    # Debug: print a snippet around where it should be
    start_idx = content.find(".focus-ring:focus")
    if start_idx != -1:
        print("Found .focus-ring:focus at index", start_idx)
        print("Snippet:", repr(content[start_idx:start_idx+200]))
    else:
        print("Could not find .focus-ring:focus")
