import json
import sqlite3
import asyncio
import warnings
from datetime import datetime

warnings.simplefilter("always")


async def create_tables(DB_PATH):
    try:
        connection = sqlite3.connect(DB_PATH)
        cursor = connection.cursor()

        cursor.execute("""
        CREATE TABLE IF NOT EXISTS parks (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            description TEXT,
            metro TEXT,
            address TEXT,
            cord TEXT,
            image TEXT)
        """)

        cursor.execute("""
        CREATE TABLE IF NOT EXISTS types_red_book (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            type TEXT,
            squad TEXT,
            family TEXT,
            description TEXT,
            list_park TEXT,
            image TEXT
        )
        """)

        cursor.execute("""
                CREATE TABLE IF NOT EXISTS give_photo (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    image1 TEXT,
                    image2 TEXT,
                    image3 TEXT,
                    type TEXT,
                    date TEXT,
                    cord TEXT,
                    author TEXT,
                    comment TEXT
                )
                """)

        connection.commit()
        connection.close()
    except Exception as ex:
        print(f"[ERROR] Dont create db: {ex}")


async def add_park(DB_PATH, name, description, metro, address, cord, image):
    connection = None

    try:
        connection = sqlite3.connect(DB_PATH)
        cursor = connection.cursor()
        cursor.execute("""
        INSERT INTO parks (name, description, metro, address, cord, image) VALUES (?, ?, ?, ?, ?, ?)
        """, (name, description, metro, address, cord, image))
        connection.commit()
        connection.close()
    except sqlite3.OperationalError as e:
        await create_tables(DB_PATH)
    except Exception as _ex:
        warnings.warn(f"Error: {_ex}")
        return "error"

    finally:
        if connection:
            connection.close()

        return "ok"


async def add_type_red_book(DB_PATH, name, type, squad, family, description, live_in_park, image):
    connection = None

    try:
        connection = sqlite3.connect(DB_PATH)
        cursor = connection.cursor()
        cursor.execute("""
        INSERT INTO types_red_book (name, type, squad, family, description, list_park, image) VALUES (?, ?, ?, ?, ?, ?, ?)
        """, (name, type, squad, family, description, json.dumps(live_in_park), image))
        connection.commit()
        connection.close()

    except sqlite3.OperationalError as e:
        await create_tables(DB_PATH)

    except Exception as _ex:
        warnings.warn(f"Error: {_ex}")
        return "error"

    finally:
        if connection:
            connection.close()

        return "ok"


async def get_park(DB_PATH):
    connection = None
    result = None

    try:
        connection = sqlite3.connect(DB_PATH)
        cursor = connection.cursor()
        cursor.execute("SELECT * FROM parks")
        result = cursor.fetchall()

        if result is None:
            return "Park not found"

    except sqlite3.OperationalError as e:
        await create_tables(DB_PATH)
    except Exception as _ex:
        warnings.warn(f"Error: {_ex}")
        return "error"
    finally:
        if connection:
            connection.close()

    return result


async def get_creatures(DB_PATH, type_id):
    connection = None
    result = None

    try:
        connection = sqlite3.connect(DB_PATH)
        cursor = connection.cursor()
        cursor.execute("SELECT * FROM types_red_book WHERE id LIKE ?", (type_id,))
        result = cursor.fetchone()
        if result is None:
            return "Type not found"

    except sqlite3.OperationalError as e:
        await create_tables(DB_PATH)
    except Exception as _ex:
        warnings.warn(f"Error: {_ex}")
        return "error"
    finally:
        if connection:
            connection.close()

    return result


async def get_plants(DB_PATH):
    connection = None
    result = None

    try:
        connection = sqlite3.connect(DB_PATH)
        cursor = connection.cursor()
        cursor.execute("SELECT * FROM types_red_book WHERE type = 'plant'")
        result = cursor.fetchall()

        if result is None:
            return "Park not found"

    except sqlite3.OperationalError as e:
        await create_tables(DB_PATH)
    except Exception as _ex:
        warnings.warn(f"Error: {_ex}")
        return "error"
    finally:
        if connection:
            connection.close()

    return result


async def get_animals(DB_PATH):
    connection = None
    result = None

    try:
        connection = sqlite3.connect(DB_PATH)
        cursor = connection.cursor()
        cursor.execute("SELECT * FROM types_red_book WHERE type = 'animal'")
        result = cursor.fetchall()

        if result is None:
            return "Park not found"

    except sqlite3.OperationalError as e:
        await create_tables(DB_PATH)
    except Exception as _ex:
        warnings.warn(f"Error: {_ex}")
        return "error"
    finally:
        if connection:
            connection.close()

    return result


async def get_mushroom(DB_PATH):
    connection = None
    result = None

    try:
        connection = sqlite3.connect(DB_PATH)
        cursor = connection.cursor()
        cursor.execute("SELECT * FROM types_red_book WHERE type = 'mushroom'")
        result = cursor.fetchall()

        if result is None:
            return "Park not found"

    except sqlite3.OperationalError as e:
        await create_tables(DB_PATH)
    except Exception as _ex:
        warnings.warn(f"Error: {_ex}")
        return "error"
    finally:
        if connection:
            connection.close()

    return result


async def add_new_photo(DB_PATH, image1, image2, image3, type, date, cord, author, comment):
    connection = None

    try:
        connection = sqlite3.connect(DB_PATH)
        cursor = connection.cursor()
        cursor.execute("""
        INSERT INTO give_photo (image1, image2, image3, type, date, date, cord, author, comment) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        """, (image1, image2, image3, type, date, date, cord, author, comment))
        connection.commit()
        connection.close()

    except sqlite3.OperationalError as e:
        await create_tables(DB_PATH)

    except Exception as _ex:
        warnings.warn(f"Error: {_ex}")
        return "error"

    finally:
        if connection:
            connection.close()

        return "ok"


async def get_photo(DB_PATH):
    connection = None

    try:
        connection = sqlite3.connect(DB_PATH)
        cursor = connection.cursor()
        cursor.execute("""SELECT * FROM give_photo""")
        connection.commit()
        connection.close()

    except sqlite3.OperationalError as e:
        await create_tables(DB_PATH)

    except Exception as _ex:
        warnings.warn(f"Error: {_ex}")
        return "error"

    finally:
        if connection:
            connection.close()

        return "ok"


if __name__ == '__main__':
    create_tables("database/database.db")
