import React from 'react'
import Card from './Card'

function Dashboard() {
      const cards = [
            {
                  title :   'Earnings (Monthly)',
                  amount : '$ 40,000' ,
                  theme : 'primary',
                  icon : 'fas fa-calendar'
            },
            {
                  title :   'Earnings (Annual)',
                  amount : '$ 215,000' ,
                  theme : 'success',
                  icon : 'fas fa-dollar-sign'
            },
            {
                  title :   'Tasks',
                  amount : '50 %',
                  theme : 'info',
                  icon : 'fas fa-clipboard-list'
            },
            {
                  title :   'Pending Requests',
                  amount : 18 ,
                  theme : 'warning',
                  icon : 'fas fa-comments'
            }
      ]
  return (
    <>
     <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                        <a className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                    </div>
                    <div className="row">
                        {
                               cards.map((card) => {
                                    return <Card data={card} />
                               }) 
                        }
                        
                        
                       
                    </div>
    
    </>
  )
}

export default Dashboard