import { useEffect, useState } from 'react';

const usePresistedSearch = (sessionStoragekey, intial) => {
  const [searchStr, setSearchStr] = useState(() => {
    const value = sessionStorage.getItem(sessionStoragekey);
    return value ? JSON.parse(value) : intial;
  });

  useEffect(() => {
    sessionStorage.setItem(sessionStoragekey,  JSON.stringify(searchStr)  );
  }, [searchStr, sessionStoragekey]);
  return [searchStr, setSearchStr];
};

export const useSearchStr = () => {
  return usePresistedSearch('searchStr', '');
};
