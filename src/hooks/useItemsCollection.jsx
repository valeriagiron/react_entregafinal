import React from "react";
import { collection, getDocs } from "firebase/firestore";
import db from '../Firebase/config';

const useItemsCollection = (categoryName) => {
  const [items, setItems] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    const itemsCollection = collection(db, categoryName);
    getDocs(itemsCollection)
      .then((snapshot) => {
        setItems(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return { items, loading, error };
};

export default useItemsCollection;