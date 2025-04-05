# Redux Toolkit App Structure Example
This project is a simple example of a Redux Toolkit application structure. It demonstrates how to organize Redux logic, handle async actions, and integrate with React components.

## Redux Toolkit Concepts Demonstrated

This application demonstrates several key Redux Toolkit concepts that are essential for beginners to understand:

### Store Configuration

- **Store Setup** (`src/app/store.ts`): The central Redux store is configured using `configureStore`, which automatically sets up the Redux DevTools extension and adds middleware like redux-thunk.
- **Typed Hooks** (`src/app/hooks.ts`): Pre-typed versions of `useDispatch` and `useSelector` hooks that provide type safety when working with Redux state and actions.

### Slice Pattern

- **Feature Slices** (`src/features/counter/counterSlice.ts`): The app uses the slice pattern to organize Redux logic by feature, with each slice containing its reducers, actions, and selectors.
- **createSlice** (`src/features/counter/counterSlice.ts`): This powerful function generates action creators and action types automatically based on the reducer functions you provide.
- **Immer Integration**: Redux Toolkit uses Immer to allow "mutating" logic in reducers that actually produces immutable updates (see the counter reducers).

### Async Logic

- **createAsyncThunk** (`src/features/counter/counterSlice.ts`): This utility simplifies handling async requests by generating thunks that dispatch pending/fulfilled/rejected action types automatically.
- **extraReducers**: The counterSlice demonstrates how to handle these async action types using the builder callback pattern.

### RTK Query

- **API Slice** (`src/services/apiSlice.ts`): The app uses RTK Query's `createApi` to define an API slice that handles data fetching, caching, and state management.
- **Endpoints** (`src/services/apiSlice.ts`): The API slice defines endpoints for fetching quotes and products from a dummy API.
- **Generated Hooks** (`src/features/quotes/Quotes.tsx` & `src/features/products/Products.tsx`): RTK Query automatically generates React hooks like `useGetQuotesQuery` that components can use to fetch data.
- **Cache Invalidation**: The API slice demonstrates tag-based cache invalidation with `providesTags` and `invalidatesTags`.

### React-Redux Integration

- **Provider Setup** (`src/main.tsx`): The Redux store is provided to the React component tree using the `Provider` component.
- **Selector Pattern** (`src/features/counter/counterSlice.ts`): The app uses selector functions to extract specific pieces of state from the store.
- **Dispatching Actions** (`src/features/counter/Counter.tsx`): Components dispatch actions using the `useAppDispatch` hook and access state using the `useAppSelector` hook.

## Scripts

- `dev`/`start` - start dev server and open browser
- `build` - build for production
- `preview` - locally preview production build

## Inspiration

- [Create React App](https://github.com/facebook/create-react-app/tree/main/packages/cra-template)
- [Vite](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react)
- [Vitest](https://github.com/vitest-dev/vitest/tree/main/examples/react-testing-lib)
