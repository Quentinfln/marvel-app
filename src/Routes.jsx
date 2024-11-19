import { getCharacters, getCharacterById } from './api/characters-api';
import Layout from "./Layout";
import AboutPage from "./pages/AboutPage";
import CharactersPage from "./pages/CharactersPage";
import ContactPage from "./pages/ContactPage";
import CharacterDetailPage from "./pages/CharacterDetailPage";

const routes = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <CharactersPage />,
                loader: async ({ request }) => {
                    const url = new URL(request.url);
                    const sort = url.searchParams.get('sort') || 'name';
                    const order = url.searchParams.get('order') || 'asc';
                    return getCharacters(sort, order);
                }
            },
            { path: "/about", element: <AboutPage /> },
            { path: "/contact", element: <ContactPage /> },
            {
                path: "/characters/:id",
                element: <CharacterDetailPage />,
                loader: async ({ params }) => {
                    const character = await getCharacterById(params.id);
                    if (!character) {
                        throw new Response("Character not found", { status: 404 });
                    }
                    return character;
                },
            },
        ],
    },
];

export default routes;
