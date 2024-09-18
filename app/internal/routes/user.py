from fastapi import APIRouter, UploadFile, File, Form, Request, Response
from fastapi.responses import JSONResponse
import asyncio
import app.internal.database.db_sqlite3 as db
from pydantic import BaseModel
from dotenv import load_dotenv
import os
import shutil
import json

router = APIRouter(
    prefix="/api/v1"
)

load_dotenv()
path = os.getenv('PATH')
bd_name = os.getenv('DB_NAME')


class Get_creaturesID(BaseModel):
    id: int


class Add_park(BaseModel):
    name: str
    description: str
    metro: str
    address: str
    cord: str
    image: str


class Add_creatures(BaseModel):
    name: str
    type: str
    squad: str
    family: str
    description: str
    list_park: list
    image: str


class Add_new_photo(BaseModel):
    name: str
    type: str
    squad: str
    family: str
    description: str
    list_park: list
    image: str

@router.get("/get_parks")
async def get_parks():
    return {"data": await db.get_park(bd_name)}


@router.get("/get_animals")
async def get_animals():
    return {"data": await db.get_animals(bd_name)}


@router.get("/get_mushroom")
async def get_mushroom():
    return {"data": await db.get_mushroom(bd_name)}


@router.get("/get_photo")
async def get_creatures():
    return {"data": await db.get_photo(bd_name)}

@router.post("/get_creatures")
async def get_creatures(data: Get_creaturesID):
    return {"data": await db.get_creatures(bd_name, data.id)}


@router.post("/add_new_photo")
async def add_park(data: Add_park):
    return {"data": await db.add_park(bd_name, data.name, data.description, data.metro, data.address, data.cord, data.image)}


@router.post("/add_park")
async def add_park(data: Add_park):
    return {"data": await db.add_park(bd_name, data.name, data.description, data.metro, data.address, data.cord, data.image)}


@router.post("/add_creatures")
async def add_creatures(data: Add_creatures):
    return {"data": await db.add_type_red_book(bd_name, data.name, data.type, data.squad, data.family, data.description,
                                      data.list_park, data.image)}
