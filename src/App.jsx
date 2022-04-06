import { Suspense } from "react";
import LoadingComponent from "./compontents/Loading";
import RenderRouter from "./routers";

export default function App() {
  return (
    <div className="app-container">
      <Suspense fallback={<LoadingComponent />}>
        <RenderRouter />
      </Suspense>
    </div>
  );
}
