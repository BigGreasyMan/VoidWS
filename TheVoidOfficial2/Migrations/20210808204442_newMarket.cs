using Microsoft.EntityFrameworkCore.Migrations;

namespace TheVoidOfficial2.Migrations
{
    public partial class newMarket : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<double>(
                name: "DataAdded",
                table: "MarketItems",
                type: "REAL",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<double>(
                name: "Qty",
                table: "MarketItems",
                type: "REAL",
                nullable: false,
                defaultValue: 0.0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DataAdded",
                table: "MarketItems");

            migrationBuilder.DropColumn(
                name: "Qty",
                table: "MarketItems");
        }
    }
}
