CREATE TABLE "workspace" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp with time zone,
	"workspace_ownner" uuid NOT NULL,
	"title" text NOT NULL,
	"iconid" text NOT NULL,
	"data" text NOT NULL,
	"in_trash" text NOT NULL,
	"logo" text NOT NULL,
	"bannerurl" text NOT NULL
);
