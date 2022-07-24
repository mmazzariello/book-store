import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { useAppContext } from "../store/store";

const View = () => {
  const [item, setItem] = useState(null);
  const params = useParams();
  const store = useAppContext();

  useEffect(() => {
    const book = store.getItem(params.bookId);
    setItem(book);
  }, []);

  const itemStyles = {
    container: {
      display: "flex",
      gap: "20px",
      color: "white",
      width: "800px",
      margin: "0 auto",
    },
    info: {
      color: "white",
    },
  };

  if (!item) {
    return <Layout>Item not found</Layout>;
  }

  return (
    <Layout>
      <div styles={itemStyles.container}>
        <div>
          <div>
            {item?.cover ? (
              <img src={item?.cover} width="400" alt={item.title} />
            ) : (
              ""
            )}
          </div>
        </div>

        <div style={itemStyles.info}>
          <h2>{item?.title}</h2>
          <div>Author: {item?.author}</div>
          <div>Introduction: {item?.intro}</div>
          <div>State: {item?.completed ? "Read" : "Unfinished"}</div>
          <div>Review: {item?.review}</div>
        </div>
      </div>
    </Layout>
  );
};

export default View;
