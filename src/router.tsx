import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { BooksPage } from './pages/BooksPage';
import { BookDetailPage } from './pages/BookDetailPage';
import { VoyagePage } from './pages/VoyagePage';
import { CharactersPage } from './pages/CharactersPage';
import { EncountersPage } from './pages/EncountersPage';
import { ScholarshipPage } from './pages/ScholarshipPage';
import { KnowledgeTrialPage } from './pages/KnowledgeTrialPage';
import { AboutPage } from './pages/AboutPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/journey',
    element: <VoyagePage />,
  },
  {
    path: '/voyage',
    element: <VoyagePage />,
  },
  {
    path: '/characters',
    element: <CharactersPage />,
  },
  {
    path: '/encounters',
    element: <EncountersPage />,
  },
  {
    path: '/insights',
    element: <ScholarshipPage />,
  },
  {
    path: '/scholarship',
    element: <ScholarshipPage />,
  },
  {
    path: '/trial',
    element: <KnowledgeTrialPage />,
  },
  {
    path: '/quiz',
    element: <KnowledgeTrialPage />,
  },
  {
    path: '/books',
    element: <BooksPage />,
  },
  {
    path: '/books/:bookId',
    element: <BookDetailPage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);
