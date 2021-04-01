import React from 'react';

const RemoteButton = React.lazy(() => import("project_components/Button"));

const App = () => (
    <div>
        <h1>Main Project</h1>
        <React.Suspense fallback={'Loading...'}>
            <RemoteButton />
            <RemoteButton label={'foobar'}/>
        </React.Suspense>
    </div>
);

export default App;
