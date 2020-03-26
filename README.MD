<div align="center" markdown="1">
<img src="https://www.bestwebfirms.com/img/badges/best-web-firms.png" alt="Bet Web Firms" width="112">
</div>

## Quick Start

Start cloning the repo
```bash
git clone https://github.com/celerik/best-web-firms-bamburgh.git
cd best-web-firms-bamburgh
docker-compose up --build
```

Then you have the following infrastructure:

| URL                     | Service                | Username             | Password| Hostname | Database
| ----------------------- |------------------------| -------------------- | --------| ---------| ----------
| http://localhost:58080  | React bamburgh web app |                      |         |          |
| http://localhost:58181  | Laravel API            |                      |         |          |
| http://localhost:45432  | Posgres DB instance    | postgres             | postgres| postgres | postgres
| http://localhost:55432  | PGAdmin4               | pgadmin4@celerik.com | admin   |          |

To connect from PGAdmin to Postgres DB instance:
