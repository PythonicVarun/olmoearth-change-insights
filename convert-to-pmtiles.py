import argparse
import os
import sys

try:
    from osgeo import gdal
except ImportError:
    system_python = "/usr/bin/python3"
    if sys.executable != system_python and os.path.exists(system_python):
        os.execv(system_python, [system_python] + sys.argv)
    else:
        print("[Error] GDAL Python bindings ('osgeo') are not installed or are incompatible.", file=sys.stderr)
        print(
            "Please install them using: sudo apt-get install -y gdal-bin libgdal-dev python3-gdal", file=sys.stderr
        )
        sys.exit(1)


def convert_geojson_to_pmtiles(
    input_path, output_path=None, target_crs="EPSG:4326", min_zoom=None, max_zoom=None
):
    """
    Converts a GeoJSON file to PMTiles using the GDAL/OGR VectorTranslate API.
    """
    gdal.UseExceptions()

    # Resolve default output path if not specified
    if not output_path:
        base, _ = os.path.splitext(input_path)
        output_path = base + ".pmtiles"

    dsco = []
    if min_zoom is not None:
        dsco.append(f"MINZOOM={min_zoom}")
    if max_zoom is not None:
        dsco.append(f"MAXZOOM={max_zoom}")

    options = gdal.VectorTranslateOptions(
        format="PMTiles", dstSRS=target_crs, datasetCreationOptions=dsco
    )

    print(f"--- Conversion Configuration ---")
    print(f"Input file:  {input_path}")
    print(f"Output file: {output_path}")
    print(f"Target CRS:  {target_crs}")
    if dsco:
        print(f"Options:     {', '.join(dsco)}")
    else:
        print(f"Options:     Default settings")
    print(f"--------------------------------")

    try:
        gdal.VectorTranslate(output_path, input_path, options=options)
        print("\n[Success] Conversion completed successfully!")
        os.remove(input_path)
        return True
    except Exception as e:
        print(f"\n[Error] Conversion failed: {e}", file=sys.stderr)
        return False


def main():
    parser = argparse.ArgumentParser(
        description="Convert GeoJSON files to PMTiles format using GDAL/OGR."
    )
    parser.add_argument("input_geojson", help="Path to the input GeoJSON file")
    parser.add_argument(
        "-o",
        "--output",
        help="Path to the output PMTiles file (default: same name as input with .pmtiles extension)",
    )
    parser.add_argument(
        "-c",
        "--crs",
        default="EPSG:4326",
        help="Target Coordinate Reference System (default: EPSG:4326)",
    )
    parser.add_argument(
        "--minzoom", type=int, help="Minimum zoom level for PMTiles generation"
    )
    parser.add_argument(
        "--maxzoom", type=int, help="Maximum zoom level for PMTiles generation"
    )

    args = parser.parse_args()

    if not os.path.exists(args.input_geojson):
        print(
            f"[Error] Input file '{args.input_geojson}' does not exist.",
            file=sys.stderr,
        )
        sys.exit(1)

    success = convert_geojson_to_pmtiles(
        input_path=args.input_geojson,
        output_path=args.output,
        target_crs=args.crs,
        min_zoom=args.minzoom,
        max_zoom=args.maxzoom,
    )

    if not success:
        sys.exit(1)


if __name__ == "__main__":
    main()
