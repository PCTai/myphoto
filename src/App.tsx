import React from 'react';
import './App.css';
import Banner from './components/Banner';
import Header from './components/Header';
import ListImage from './components/ListImage';
import UploadImage from './components/UploadImage';

export interface Image {
    id: number;
    name?: string;
    url: string;
}

function App() {
    return (
        <div className=" app bg-site bg-no-repeat bg-cover">
            <Header />
            <Banner />
            <UploadImage />
            <ListImage />
        </div>
    );
}

export default App;
