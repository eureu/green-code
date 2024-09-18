import json
import sqlite3
import asyncio
import warnings
from datetime import datetime

warnings.simplefilter("always")


def create_tables(DB_PATH):
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

        connection.commit()
        connection.close()
    except Exception as ex:
        print(f"[ERROR] Dont create db: {ex}")



def add_park(DB_PATH, name, description, metro, address, cord, image):
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
        create_tables(DB_PATH)
    except Exception as _ex:
        warnings.warn(f"Error: {_ex}")
        return "error"

    finally:
        if connection:
            connection.close()

        return "ok"


def add_type_red_book(DB_PATH, name, type, squad, family, description, live_in_park, image):
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
        create_tables(DB_PATH)

    except Exception as _ex:
        warnings.warn(f"Error: {_ex}")
        return "error"

    finally:
        if connection:
            connection.close()

        return "ok"


def get_park(DB_PATH):
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
        create_tables(DB_PATH)
    except Exception as _ex:
        warnings.warn(f"Error: {_ex}")
        return "error"
    finally:
        if connection:
            connection.close()

    return result


def get_creatures(DB_PATH, type_id):
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
        create_tables(DB_PATH)
    except Exception as _ex:
        warnings.warn(f"Error: {_ex}")
        return "error"
    finally:
        if connection:
            connection.close()

    return result


if __name__ == '__main__':
    create_tables("database/database.db")