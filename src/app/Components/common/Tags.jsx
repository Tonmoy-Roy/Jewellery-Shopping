import React from 'react';

const Tags = () => {
    return (
        <div>
            <div className='border-t border-gray-200 mb-5'></div>
            <h3 className="text-lg font-semibold mb-3">Tags</h3>
            <div className="flex gap-2 mb-2">
                <button className="btn btn-outline hover:bg-amber-400 rounded-2xl">Accessories</button>
                <button className="btn btn-outline hover:bg-amber-400 rounded-2xl">Bracelets</button>
                <button className="btn btn-outline hover:bg-amber-400 rounded-2xl">Necklaces</button>
            </div>
            <div>
                <button className="btn btn-outline hover:bg-amber-400 rounded-2xl mr-2">Single Earring</button>
                <button className="btn btn-outline hover:bg-amber-400 rounded-2xl">Wedding</button>
            </div>
        </div>
    );
};

export default Tags;