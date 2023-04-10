import { Col, Row } from 'react-bootstrap'
import sroteItems from '../data/items.json'
import { StoreItem } from '../components/StoreItem'

export const Store = () => {
  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className='g-3'>
        {sroteItems.map(item => {
          return (
            <Col key={item.id}><StoreItem {...item} /></Col>
          )
        })}
      </Row>
    </>
  )
}