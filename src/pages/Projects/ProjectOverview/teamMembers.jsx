import React from "react"
import PropTypes from "prop-types"
import { Card, CardBody, CardTitle, Table } from "reactstrap"
import { Link } from "react-router-dom"

import { OverviewTeamMember } from "../../../common/data";

const TeamMembers = () => {
  return (
    <Card>
      <CardBody>
        <CardTitle className="mb-4">Team Members</CardTitle>

        <div className="table-responsive">
          <Table className="table align-middle table-nowrap">
            {OverviewTeamMember.map((item, key) => (
              <tbody key={key}>
                <tr>

                  <td style={{ width: "50px" }}>
                    {item.img ?
                      <img src={item.img} className="rounded-circle avatar-xs" alt="" />
                      :
                      <div className="avatar-xs">
                        <span className="avatar-title rounded-circle bg-primary text-white font-size-16">
                          {item.profile}
                        </span>
                      </div>
                    }
                  </td>
                  <td><h5 className="font-size-14 m-0"><Link to="#" className="text-dark">{item.title}</Link></h5></td>
                  <td>
                    <div>
                      <Link to="#" className="badge bg-primary bg-soft text-primary font-size-11 me-1">{item.label_1}</Link>
                      <Link to="#" className="badge bg-primary bg-soft text-primary font-size-11">{item.label_2}</Link>
                    </div>
                  </td>
                </tr>
              </tbody>
            ))}
          </Table>
        </div>
      </CardBody>
    </Card>
  )
}

TeamMembers.propTypes = {
  team: PropTypes.array,
}

export default TeamMembers
