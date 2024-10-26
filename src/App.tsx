import { Route, Routes } from 'react-router-dom';
import Posts from './containers/Posts/Posts';
import About from './containers/About/About';
import Contacts from './containers/Contacts/Contacts';
import Navbar from './components/Navbar/Navbar';
import NotFound from './components/NotFound/NotFound';
import Container from '@mui/material/Container';
import PostView from './containers/PostView/PostView';
import PostEdit from './containers/PostEdit/PostEdit';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Container maxWidth='lg' sx={{ p: 2 }}>
          <Routes>
            <Route path='/' element={<Posts />}>
              <Route path='posts' element={null} />
            </Route>
            <Route path='/posts/:name' element={<PostView />} />
            <Route path='/posts/:name/edit' element={<PostEdit />} />
            <Route path='/new-post' element={<PostEdit />} />
            <Route path='/about' element={<About />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route
              path='*'
              element={<NotFound title='Нет такой страницы' description='Попробуйте вернуться назад, или воспользуйтесь ссылками на панели навигации' />}
            />
          </Routes>
        </Container>
      </main>
    </>
  );
}

export default App;
