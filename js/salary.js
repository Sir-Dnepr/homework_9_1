"use strict";

const company = {
    sales: [
        {
            name: 'John',
            salary: 1000
        },
        {
            name: 'Alice',
            salary: 600
        }
    ],
    development: {
        web: [
            {
                name: 'Peter',
                salary: 2000
            },
            {
                name: 'Peter',
                salary: 1800
            }
        ],
        internals: [
            {
                name: 'Jack',
                salary: 1300
            }
        ],
        seo: [
            {
                senior: [
                    {
                        pomidor: [
                            [
                                [
                                    {
                                        name: 'Nick',
                                        salary: 3006
                                    }
                                ]
                            ]
                        ]
                    }
                ]
            }
        ]
    }
};

function getTotalSalaryByCompany(company, salary = 0) {
    if (company === null || typeof company !== 'object') {
        return salary;
    }

    if (company instanceof Array) {
        for (const item of company) {
            salary = getTotalSalaryByCompany(item, salary);
        }
    } else {
        if (company.hasOwnProperty('salary')) {
            salary += +company.salary;
        } else {
            for (const item in company) {
                salary = getTotalSalaryByCompany(typeof item === 'object' ? item : company[item], salary);
            }
        }
    }

    return salary;
}

console.log(getTotalSalaryByCompany(company));
