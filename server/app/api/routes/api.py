from fastapi import APIRouter

from app.api.routes import authentication, users , fuse


router = APIRouter()
router.include_router(authentication.router, tags=["authentication"], prefix="/users")
router.include_router(users.router, tags=["users"], prefix="/user")
router.include_router(fuse.router, tags=["fuse"], prefix="/fuse")