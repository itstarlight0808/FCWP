from app.db.repositories.base import BaseRepository
from app.models.domain.fuse_model import FuseBFRModel, FuseEFModel
tb_name1 = "fuse_base_failure_rate"
tb_name2 = "fuse_environment_factor";

class FuseRepo(BaseRepository):
    async def getFuseFactors(self):
        query : str = "SELECT * FROM "+tb_name1
        base_failure_rate = await self._log_and_fetch_all(query)
        query : str = "SELECT * FROM "+tb_name2
        environment_factor = await self._log_and_fetch_all(query)
        print(base_failure_rate, environment_factor)
        return {
            "base_failure_rate" : base_failure_rate,
            "environment_factor" : environment_factor
        }