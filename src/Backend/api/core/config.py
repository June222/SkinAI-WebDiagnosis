from pydantic import BaseSettings, BaseModel


class Settings(BaseSettings):
    # App Settings
    PROJECT_NAME: str = 'SKIN - API'
    API_V1_STR: str = '/api/v1'

    # Database Settings
    DB_HOST: str = 'localhost'
    DB_PORT: int = 5432
    DB_NAME: str = 'skin_db'
    USER: str = 'skin_user'
    PASSWORD: str = '5KaAme3BT1dHAOimu9lFF05ceR4Bx9fjHB2mbWtbXQDVIaYt0C3KWOqOIHdRzGS55sJ1RLg5evoMscapQeGJwGLodlUz7yTIICMPqEtQdkbHjTfkQmftrWHuI9M93jUp'
    SQLALCHEMY_DATABASE_URI: str = f'postgresql://{USER}:{PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}'

    # JWT Settings
    SECRET_KEY: str = '26mpViW3rldpRIrlqhPlzXSqbMscYMd8MCJHk6ipxus3YzAGXPS2PGQl2FqjDEyxH5OAHmFEAThkyGXJYetG1iY0byF32Slc6Tv3AHRtStHWec9UwK9HdSHQL2V0c5w94GzcAxlqg9udRcZ3tMwlLdMF63BZefU0TCYHBbmksI8vXIUXqc9LbxigEXpGG5GQjd009DxVGAEXU40yMJdCgX3mkJjDBtl4XM0Sa29HfWhdk8fL6I6Jdk5w5Krbd3Ie'
    TOKEN_LOCATION: set = {'cookies'}
    COOKIE_SECURE: bool = False  # should be True in production
    COOKIE_SAMESITE: str = 'lax'  # should be 'lax' or 'strict' in production

    # ADMIN Settings
    ADMIN_ID: str = 'admin'
    ADMIN_PASSWORD: str = '12341234'
    ADMIN_PHONE: str = '01012341234'
    ADMIN_RESIDENT_NUMBER: str = '1234567'

settings = Settings()

class AuthJWTSettings(BaseModel):
    authjwt_secret_key: str = settings.SECRET_KEY
    authjwt_token_location: set = settings.TOKEN_LOCATION
    authjwt_cookie_secure: bool = settings.COOKIE_SECURE
    authjwt_cookie_samesite: str = settings.COOKIE_SAMESITE