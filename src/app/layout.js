import "../../public/styles/global.css"
import { Provider } from "@/context/Context";
import Header from "@/components/header/Header";
export async function generateMetadata({ params }) {
    return {
        title: "Радуга цветов",
    }
}

export default function Layout({children}) {
  return (
    <html>
    <body>
      <Provider>
        <Header />
        <div className="container__content">
            {children}
        </div>
      </Provider>
    </body>
    </html>
  );
}
