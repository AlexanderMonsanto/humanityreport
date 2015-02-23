--
-- PostgreSQL database dump
--

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: report; Type: TABLE; Schema: public; Owner: jam1960us; Tablespace: 
--

CREATE TABLE report (
    title text,
    description text,
    type text,
    street text,
    city text,
    province text,
    "postalCode" text,
    country text,
    latitude text,
    longitude text,
    id integer NOT NULL,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone
);


ALTER TABLE public.report OWNER TO jam1960us;

--
-- Name: report_id_seq; Type: SEQUENCE; Schema: public; Owner: jam1960us
--

CREATE SEQUENCE report_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.report_id_seq OWNER TO jam1960us;

--
-- Name: report_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jam1960us
--

ALTER SEQUENCE report_id_seq OWNED BY report.id;


--
-- Name: user; Type: TABLE; Schema: public; Owner: jam1960us; Tablespace: 
--

CREATE TABLE "user" (
    "firstName" text,
    "lastName" text,
    email text,
    password text,
    id integer NOT NULL,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone
);


ALTER TABLE public."user" OWNER TO jam1960us;

--
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: jam1960us
--

CREATE SEQUENCE user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_id_seq OWNER TO jam1960us;

--
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jam1960us
--

ALTER SEQUENCE user_id_seq OWNED BY "user".id;


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: jam1960us
--

ALTER TABLE ONLY report ALTER COLUMN id SET DEFAULT nextval('report_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: jam1960us
--

ALTER TABLE ONLY "user" ALTER COLUMN id SET DEFAULT nextval('user_id_seq'::regclass);


--
-- Name: report_pkey; Type: CONSTRAINT; Schema: public; Owner: jam1960us; Tablespace: 
--

ALTER TABLE ONLY report
    ADD CONSTRAINT report_pkey PRIMARY KEY (id);


--
-- Name: user_pkey; Type: CONSTRAINT; Schema: public; Owner: jam1960us; Tablespace: 
--

ALTER TABLE ONLY "user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);


--
-- Name: public; Type: ACL; Schema: -; Owner: jam1960us
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM jam1960us;
GRANT ALL ON SCHEMA public TO jam1960us;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

