import auth0 from '../../lib/auth0'
import { query as q } from 'faunadb'
import { serverClient, serializeFaunaCookie } from '../../utils/fauna-auth'

export default async function login(req, res) {
  try {
    const response = await auth0.handleLogin(req, res);
    if (res.statusCode === 302) {
      let email="ddfbjkb"
      let user1="anu.294@gmail.com"
    let folwrCount1="0"
      await serverClient.query(
        q.Create(q.Collection('Tweets'), {//Change from User
          credentials: { password },
          data: { email, user1 , folwrCount1},
        })
      )
    }
  } catch (error) {
    console.error(error)
    res.status(error.status || 500).end(error.message)
  }
}
