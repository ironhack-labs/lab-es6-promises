# Async JavaScript Quick Reference

## 1. Callbacks

**Idea:** Run a function *after* an async task finishes.

**Problem:** Creates deep nesting ("callback hell"). Hard to read and
maintain.

------------------------------------------------------------------------

## 2. Promises

**Idea:** A Promise is a value that will exist later.

**Pattern:**

``` javascript
getInstruction("steak", 0)
  .then(step => console.log(step))
  .catch(error => console.error(error));
```

**Key Rule:**\
Always `return` a promise inside `.then()` to keep the chain working.

**Benefit:** Flatter structure + centralized error handling.

------------------------------------------------------------------------

## 3. async / await


-   `async` → allows waiting inside the function.
-   `await` → pause THIS function until the promise resolves.
-   Does NOT freeze the browser.

**Example:**

``` javascript
async function makeSteak() {
  const step = await getInstruction("steak", 0);
  console.log(step);
}
```

**Rules:** ✅ `await` only works inside `async` functions.\
✅ Reads top → bottom (less cognitive load).

------------------------------------------------------------------------

## async + await loop reference

``` javascript
async function makeBroccoli() {
  try {
    const list = document.querySelector("#broccoli");

    for (let i = 0; i < 7; i++) {
      const step = await getInstruction("broccoli", i);
      list.innerHTML += `<li>${step}</li>`;
    }

    document.querySelector("#broccoliImg").style.display = "block";

  } catch (error) {
    console.error(error);
  }
}

makeBroccoli();
```

------------------------------------------------------------------------

## 4. Promise.all()

**Idea:** Run async tasks in parallel instead of waiting one-by-one.

**Use when tasks are independent.**

### Pattern:

1.  Create promises\
2.  Await them together\
3.  Use results

``` javascript
async function makeBroccoli() {
  const list = document.querySelector("#broccoli");

  const promises = [];
  for (let i = 0; i < 7; i++) {
    promises.push(getInstruction("broccoli", i));
  }

  const steps = await Promise.all(promises);

  steps.forEach(step => {
    list.innerHTML += `<li>${step}</li>`;
  });

  document.querySelector("#broccoliImg").style.display = "block";
}
```

### What it means:

> "Start everything → wait once → continue."

**Important:**\
If ONE promise fails → `Promise.all()` fails.

------------------------------------------------------------------------

## When to Use What

✅ **Callbacks:** Mostly legacy code.\
✅ **Promises:** Good to understand, common in APIs.\
✅ **async/await:** Default choice for readability.\
✅ **Promise.all():** Use for speed when tasks don't depend on each
other.

------------------------------------------------------------------------

## One-Line Mental Models

-   **Promise:** "I'll give you the value later."\
-   **async:** "This function can wait."\
-   **await:** "Pause here until ready."\
-   **Promise.all:** "Start all requests in parallel → wait → render when ALL are done.”

-------------------------------------------------------
## Visual Comparison: Sequential vs. Parallel

### Method 1: Promise Chain (Sequential - One at a Time)

```mermaid
gantt
    title Promise Chain: Sequential Execution
    dateFormat YYYY-MM-DD HH:mm:ss
    
    section Requests
    Step 0  :s0, 2026-02-09 00:00:00, 1s
    Step 1  :s1, after s0, 1s
    Step 2  :s2, after s1, 1s
    Step 3  :s3, after s2, 1s
    Step 4  :s4, after s3, 1s
    
    section Display
    Display 0  :d0, 2026-02-09 00:00:00, 1s
    Display 1  :d1, after d0, 1s
    Display 2  :d2, after d1, 1s
    Display 3  :d3, after d2, 1s
    Display 4  :d4, after d3, 1s
```

**Total Time: ~5 seconds** (requests happen ONE AFTER ANOTHER)

### Method 2: Async/Await Loop (Sequential - One at a Time)

```mermaid
gantt
    title Async/Await Loop: Sequential Execution
    dateFormat YYYY-MM-DD HH:mm:ss
    
    section Requests
    Step 0  :s0, 2026-02-09 00:00:00, 1s
    Step 1  :s1, after s0, 1s
    Step 2  :s2, after s1, 1s
    Step 3  :s3, after s2, 1s
    Step 4  :s4, after s3, 1s
    Step 5  :s5, after s4, 1s
    Step 6  :s6, after s5, 1s
    
    section Display
    Display 0  :d0, 2026-02-09 00:00:00, 1s
    Display 1  :d1, after d0, 1s
    Display 2  :d2, after d1, 1s
    Display 3  :d3, after d2, 1s
    Display 4  :d4, after d3, 1s
    Display 5  :d5, after d4, 1s
    Display 6  :d6, after d5, 1s
```

**Total Time: ~7 seconds** (each request waits for the previous one to complete)

### Method 3: Promise.all (PARALLEL - All at Once!)

```mermaid
gantt
    title Promise.all: Parallel Execution
    dateFormat YYYY-MM-DD HH:mm:ss
    
    section Requests
    Step 0  :s0, 2026-02-09 00:00:00, 1s
    Step 1  :s1, 2026-02-09 00:00:00, 1s
    Step 2  :s2, 2026-02-09 00:00:00, 1s
    Step 3  :s3, 2026-02-09 00:00:00, 1s
    Step 4  :s4, 2026-02-09 00:00:00, 1s
    Step 5  :s5, 2026-02-09 00:00:00, 1s
    Step 6  :s6, 2026-02-09 00:00:00, 1s
    Step 7  :s7, 2026-02-09 00:00:00, 1s
    
    section Display
    Display All  :d0, after s0, 1s
```

**Total Time: ~1 second** (all requests happen SIMULTANEOUSLY)

### Quick Comparison Table

| Method | Execution | Time for 7 tasks | When to use |
|--------|-----------|------------------|------------|
| **Promise chain** | Sequential | ~1 task/sec = 7 sec | When next step depends on previous data |
| **async/await loop** | Sequential | ~1 task/sec = 7 sec | When you need to process results in order |
| **Promise.all** | Parallel | All at once = 1 sec | When tasks are independent |

**Key Insight:** Promise.all is ~7x faster for independent requests!

-------------------------------------------------------
