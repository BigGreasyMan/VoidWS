using Microsoft.EntityFrameworkCore.Migrations;

namespace TheVoidOfficial2.Migrations
{
    public partial class newMarketItemProp : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ImageLocation",
                table: "MarketItems",
                type: "TEXT",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ImageLocation",
                table: "MarketItems");
        }
    }
}
