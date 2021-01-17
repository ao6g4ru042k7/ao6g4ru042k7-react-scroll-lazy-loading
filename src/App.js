import './App.css';
import { useEffect, useState } from 'react'
import axios from 'axios'
import Table from './components/table/table'
import Spinner from './components/spinner/spinner'
import useInScrollBottom from './customHook/inScrollBottom/inScrollBottom'

function App() {
  const [dataList, setDataList] = useState(null)
  const [showLen, setShowLen] = useState(100)

  //滾輪滾到底部時觸發，加載更多資料
  useInScrollBottom(() => {
    if (dataList) {
      setShowLen(showLen + 100)
    }
  })

  useEffect(() => {
    //政府的API，有CORS問題，只能靠別人伺服器的反向代理來解決
    //但是伺服器有限制不能連續請求太多次，請小心使用~
    axios('https://cors-anywhere.herokuapp.com/https://gis.taiwan.net.tw/XMLReleaseALL_public/scenic_spot_C_f.json').then(res => {
      setDataList(res.data.XML_Head.Infos.Info.map(data => {
        return { Id: data.Id, Region: data.Region, Town: data.Town, Name: data.Name }
      }))
    })
  }, [])

  const com = dataList ? <Table dataList={dataList.slice(0, showLen)} /> : <Spinner />
  return (
    <div className="App">
      {com}
    </div>
  );
}

export default App;
