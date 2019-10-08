const Query = require('rz-mysql')
const db = new Query(require('../config/index').dbConfig)

function query(sql, values = []) {
  return db.sql(sql, values)
}


module.exports = {
  query,
  select: (table, keys) => {
    let _sql = "SELECT ?? FROM ?? "
    return query(_sql, [keys, table])
  },
  findDataById: (table, id) => {
    let _sql = "SELECT * FROM ?? WHERE id = ? "
    return query(_sql, [table, id])
  },
  insertData: (table, values) => {
    let _sql = "INSERT INTO ?? SET ?"
    return query(_sql, [table, values])
  },
  updateData: (table, values, id) => {
    let _sql = "UPDATE ?? SET ? WHERE id = ?"
    return query(_sql, [table, values, id])
  },
  deleteDataById: (table, id) => {
    let _sql = "DELETE FROM ?? WHERE id = ?"
    return query(_sql, [table, id])
  },
  count: (table) => {
    let _sql = "SELECT COUNT(*) AS total_count FROM ?? "
    return query(_sql, [table])
  }
}