from fastapi import APIRouter, Body, Depends, HTTPException
from starlette.status import HTTP_400_BAD_REQUEST
from pydantic import BaseModel

from app.api.dependencies.authentication import get_current_user_authorizer
from app.api.dependencies.database import get_repository
from app.core import config
from app.db.repositories.fuse_repo import FuseRepo

# class FuseData(BaseModel):
#     failure_rate : str
#     environment : str
router = APIRouter()

@router.get("")
async def get_factors(
    # user: User = Depends(get_current_user_authorizer()),
    # postdata : FuseData = Body(..., embed=True, aliar="postdata"),
    fuse_repo: FuseRepo = Depends(get_repository(FuseRepo))
):
    print("=======GET All Fuse Factors========")
    result : any = await fuse_repo.getFuseFactors()
    return result

