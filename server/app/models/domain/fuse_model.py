from pydantic import BaseConfig, BaseModel


class FuseBFRModel(BaseModel):
    id : int
    _type : str
    value : str


class FuseEFModel(BaseModel):
    id : int
    environment : str
    Bsymbol : str
    Ssymbol : str
    value : str