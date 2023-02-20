import React from 'react';

const Header = () => {
    return (
        <div className="max-sm:mx-4 sm:mx-6">
            <div className="container m-auto flex py-6 items-center justify-between max-w-4xl">
                <h3 className="text-2xl max-sm:text-xl font-semibold text-accent font-primary">
                    My photo
                </h3>
                <h3 className="max-sm:hidden text-xl max-sm:text-lg text-blue-400">
                    Project typescript
                </h3>
            </div>
        </div>
    );
};

export default Header;
