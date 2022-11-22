/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const deneme = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
const content = 'teklifiniz yollanıyo';
  return (
    <div>
      {loading ? (
        <ClipLoader
          color={'#D0021B'}
          loading={loading}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        
      ) : (
        content
      )}
    </div>
  );
};

export default deneme;
