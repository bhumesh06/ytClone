import Button from './Button'

const ButtonList = () => {

  const list= ["all","movies","trending","songs","tmkoc","ddlj","games","jokes","party","shinchan"]
  return (
    <div className='flex'>
      {
        list.map((btn)=> <Button key={btn} name={btn}/>)
      }
      {/* <Button name="all"/>
      <Button name="movies"/>
      <Button name="trending"/>
      <Button name="songs"/>
      <Button name="tmkoc"/>
      <Button name="ddlj"/> */}
    </div>
  )
}

export default ButtonList
