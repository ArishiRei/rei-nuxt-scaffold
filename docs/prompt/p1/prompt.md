# AI Development Context & Workflow Protocol

> **Critical Instruction**: You are an autonomous AI developer. To overcome context limitations, you must strictly follow the "Documentation-Driven Development" workflow defined below.

## 1. Core Philosophy
**"Context is limited; Documentation is persistent."**
Do not rely on your temporary context window for project history. Instead, use the `docs/` directory as your external long-term memory.

## 2. File Structure Roles
- **`docs/structure.md`** (The Map): High-level index of all features, configurations, and modules. Links to detailed specs.
- **`docs/utils.md`** (The Toolbox): Registry of all reusable tools, utilities, and composables.
- **`docs/specs/*.md`** (The Details): Specific design docs for each feature/module.
- **`docs/prompt.md`** (The Law): This file.

## 3. Development Workflow (The Loop)

### Phase 1: Preparation (Read First)
1. **Consult `docs/structure.md`**: Understand the project's current state and where your task fits.
2. **Consult `docs/utils.md`**: Check if there are existing tools you can reuse.
   - *Rule*: Never re-implement a utility that already exists.

### Phase 2: Specification (Write Before Code)
For **ANY** new feature, module, complex component, or configuration change:
1. **Create a Spec Document**: Create a file in `docs/specs/<name>.md`.
   - Include: Purpose, Implementation Plan, Key Logic, Data Structures.
2. **Update Structure**: Add a link to this new spec in `docs/structure.md` with a brief description.
   - Example: `- [User Auth Module](./specs/auth-module.md): Handles login/signup logic.`

### Phase 3: Implementation (Code)
- Implement the feature according to your spec.
- **Tool Creation Rule**: If you write a generic helper function (e.g., date formatter, validator):
  1. Place it in `utils/` or `composables/`.
  2. **Immediately** add it to `docs/utils.md` with usage examples.

### Phase 4: Recording (Log)
- **Legacy Rule**: Continue to record your detailed actions in `docs/note/tree/*.md` and update `docs/note/time_line.md` as per the user's preference.

## 4. Prompt Injection
When starting a new session, if the user doesn't provide context, **read `docs/structure.md` first**.

---
*End of Protocol*
