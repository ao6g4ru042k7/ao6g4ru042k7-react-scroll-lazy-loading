import './App.css';
import { useEffect, useState } from 'react'
import Table from './components/table/table'
import Spinner from './components/spinner/spinner'
import { isScrollInBottom } from './utils/scroll'
import $ from "jquery";

const url = "https://api.github.com/users/mschwarzmueller/repos";

function App() {
  const [dataList, setDataList] = useState(null)
  const [showLen, setShowLen] = useState(10)
  
  useEffect(() => {
    $.ajax(url).then((res) => {
      setDataList(
        res.map((data) => {
          return {
            id: data.id,
            name: data.name,
            html_url: data.html_url,
            updated_at: data.updated_at,
          };
        })
      );
    });
  }, [])

  useEffect(() => {
    if (dataList) {
      let len = 10
      const scrollHandler = () => {
        if (isScrollInBottom()) {
          len += 10
          if (len > dataList.length) {
            len = dataList.length
            window.removeEventListener('scroll', scrollHandler)
          } else {
            setShowLen(len)
          }
        }
      }
      window.addEventListener('scroll', scrollHandler)
      return () => {
        window.removeEventListener('scroll', scrollHandler)
      }
    }
  }, [dataList])

  const com = dataList ? <Table dataList={dataList.slice(0, showLen)} /> : <Spinner />
  return (
    <div className="App">
      {com}
    </div>
  );
}

export default App;
