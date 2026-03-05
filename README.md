
## 📖 Concept Questions

### 1. What is JSX, and why is it used?

JSX (JavaScript XML) is a syntax extension for JavaScript that lets you write HTML-like code directly inside JavaScript files. For example:

```jsx
const element = Hello, World!;
```

Under the hood, Babel compiles JSX into `React.createElement()` calls. It is used because it makes UI code more readable and intuitive — you can see the structure of what you're rendering right alongside the logic that controls it. Without JSX, you would have to write verbose `React.createElement('h1', null, 'Hello, World!')` calls, which is harder to read and maintain at scale.

---

### 2. What is the difference between State and Props?

| | State | Props |
|---|---|---|
| **Definition** | Internal data owned by a component | Data passed into a component from its parent |
| **Mutability** | Mutable — updated with `setState` / `useState` | Immutable — read-only inside the receiving component |
| **Ownership** | Belongs to the component itself | Belongs to the parent component |
| **Trigger re-render** | Yes — changing state re-renders the component | Yes — receiving new props re-renders the component |
| **Example** | `const [count, setCount] = useState(0)` | `<Button label="Click me" />` |

**In short:** Props are like function arguments (passed in), State is like local variables (managed inside).

---

### 3. What is the useState hook, and how does it work?

`useState` is a React Hook that lets functional components hold and update local state. Before hooks, only class components could have state.

**Syntax:**
```jsx
const [value, setValue] = useState(initialValue);
```

- `value` — the current state value
- `setValue` — a function to update it (triggers a re-render)
- `initialValue` — what the state starts as (runs only on first render)

**Example from this project:**
```jsx
const [resolvedCount, setResolvedCount] = useState(0);

// When a ticket is completed:
setResolvedCount(prev => prev + 1);
```

Every time `setResolvedCount` is called, React schedules a re-render with the new value. The `prev =>` pattern is used when the new state depends on the previous one, ensuring correctness in async updates.

---

### 4. How can you share state between components in React?

There are several ways:

1. **Lifting State Up** — Move state to the closest common parent component and pass it down as props. This is the most common pattern for sibling components that need to share data.

   ```jsx
   function Parent() {
     const [tickets, setTickets] = useState([]);
     return (
       <>
         <TicketList tickets={tickets} />
         <TaskPanel tickets={tickets} onUpdate={setTickets} />
       </>
     );
   }
   ```

2. **Context API** — Use `React.createContext()` to provide state globally without prop drilling. Great for themes, user auth, language settings.

3. **State Management Libraries** — Tools like Redux, Zustand, or Jotai manage complex global state across many components.

4. **URL / Query Params** — For shareable UI state (like filters), encode state in the URL using React Router.

**In this project**, state is lifted to the top-level `App` component and shared down via props to `Banner`, `TicketCard`, and `TaskStatusPanel`.

---

### 5. How is event handling done in React?

React uses **synthetic events** — a cross-browser wrapper around the native browser events. Handlers are passed as camelCase props on JSX elements.

**Syntax:**
```jsx
Click me
```