from sqlalchemy import Boolean, Column, Integer, String

from .session import Base


class User(Base):
    __tablename__ = "user"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    is_active = Column(Boolean, default=True)
    is_superuser = Column(Boolean, default=False)
    first_name = Column(String)
    last_name = Column(String)
    company = Column(String)
    points = Column(Integer)
    hashed_password = Column(String, nullable=False)
