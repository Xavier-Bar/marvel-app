import AboutPage from './pages/AboutPage';
import CharactersPage, { charactersLoader } from './pages/CharactersPage';
import CharacterDetailPage, { characterDetailLoader } from './pages/CharacterDetailPage';
import ContactPage from './pages/ContactPage';
import Layout from './Layout';
import NotFoundPage from './pages/NotFoundPage';

// routes of the application
const routes = [
  {
    path: "/",
    Component: Layout,
    children: [
      {
        // main page
        index: true,
        Component: CharactersPage,
        loader: charactersLoader
      },
      {
        // character details page
        path: "/character/:id",
        Component: CharacterDetailPage,
        loader: characterDetailLoader
      },
      {
        // about page
        path: "/about",
        Component: AboutPage
      },
      {
        // contact page
        path: "/contact",
        Component: ContactPage
      },
      {
        // 404 page
        path: "*",
        Component: NotFoundPage
      }
    ],
  },
]

export default routes;