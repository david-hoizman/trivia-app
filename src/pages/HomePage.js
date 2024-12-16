import React from 'react';
import TriviaCategory from '../components/TriviaCategory';
import { PageWrapper, Title } from './homePage.styles';

const HomePage = () => {
    const categories = ["מומלצים", "חדשים", "לימודיים"];

    return (
        <PageWrapper>
            <Title>ברוך הבא למשחק הטריוויה שלנו!</Title>
            <TriviaCategory categories={categories} />
        </PageWrapper>
    );
};

export default HomePage;
