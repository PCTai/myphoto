import React from 'react';

const Loading: React.FC<{ loading: boolean }> = ({ loading }) => {
    return (
        <div className="mt-6">
            <svg className={`${loading ? 'animate-spin loading' : ''} w-10 h-10 `}></svg>
        </div>
    );
};

export default Loading;
