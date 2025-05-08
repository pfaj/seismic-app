import Font from '../components/Font'
import AdminNav from '../components/admin/AdminNav'
import AdminPanel from '../components/admin/AdminPanel'
import Footer from '../components/footer/Footer'
import '../css/styles.css';
import '../css/home.css';
import '../css/admin.css';

export default function Admin({children}) {
    return (
        <>
            <Font />
            <AdminNav text="ADMIN"/>
            <main className='adminProject'>
              <div>
                <AdminPanel/>
              </div>
            </main>
            <Footer />
        </>
    );
}

